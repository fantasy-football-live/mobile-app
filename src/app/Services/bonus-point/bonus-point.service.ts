import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
	providedIn: 'root'
})
export class BonusPointService implements OnInit {
	inlcudeBonusPoints: boolean;

	constructor(private storage: Storage) {}

	ngOnInit(): void {
		this.storage.get('include-bonus-points').then((include) => {
			this.inlcudeBonusPoints = include;
		});
	}

	async getUserSetting(): Promise<boolean> {
		const inlcude = await this.storage.get('include-bonus-points');
		return inlcude;
	}

	includeBonusPoints(val = true): void {
		this.updateSetting(val);
	}

	updateSetting(val: boolean): void {
		this.storage.set('include-bonus-points', val);
	}

	/**
	 *
	 * @param fixtures array of gameweek fixtures
	 * @param id player id we are looking for
	 */
	public parseLiveBonusPoints(fixtures: any, id: number): number {
		let totalPointsBonus = 0;

		for (const fixture of fixtures) {
			for (const stat of fixture.stats) {
				// change to bps from stat and calculate top 3 players
				if (stat && stat.bps) {
					const matchBPS: Map<Number, []> = new Map();
					const topBps = {
						first: 0,
						second: 0,
						third: 0
					};

					this.parseBonusPointData(stat.bps.a, topBps, matchBPS);
					this.parseBonusPointData(stat.bps.h, topBps, matchBPS);

					const topBonusPlayers = matchBPS.get(topBps.first);
					const secondBonusPlayers = matchBPS.get(topBps.second);
					const thirdBonusPlayers = matchBPS.get(topBps.third);

					const finalBPS = [ [], [], [] ];

					/**
					 * rules for how bonus points are give is defined at https://fantasy.premierleague.com/a/help
					 * index 0 corresponds to 1 bonus point
					 * index 1 => 2 bonus points
					 * index 2 => 3 bonus points
					 */
					if (topBonusPlayers && topBonusPlayers.length > 1) {
						// tie at the top so top players get 3 points and second gets one
						finalBPS[2] = topBonusPlayers;
						finalBPS[0] = secondBonusPlayers;
					} else if (secondBonusPlayers && secondBonusPlayers.length > 1) {
						// tie in 2nd so top player gets 3 and tied players get 2, no 1 bonus point given
						finalBPS[2] = topBonusPlayers;
						finalBPS[1] = secondBonusPlayers;
					} else {
						finalBPS[0] = thirdBonusPlayers;
						finalBPS[1] = secondBonusPlayers;
						finalBPS[2] = topBonusPlayers;
					}

					// check if current player has bonus points attributed to him
					for (let i = 0; i < finalBPS.length; i++) {
						const curr = finalBPS[i];
						for (const player of curr) {
							if (player.element === id) {
								totalPointsBonus += i + 1;
							}
						}
					}
				}
			}
		}
		return totalPointsBonus;
	}

	/**
	 *
	 * @param data {Array} an array of players with their live BPS points
	 * @param bps object that stores the values of the 1st, 2nd and 3rd highest scores
	 * @param matchBPS Map of BPS values to players
	 */
	private parseBonusPointData(data: any[], bps: any, matchBPS: Map<Number, any[]>): void {
		for (const player of data) {
			const value = player.value;
			const arr: any[] = matchBPS.get(value) || [];
			arr.push(player);
			matchBPS.set(player.value, arr);

			if (value > bps.first) {
				bps.third = bps.second;
				bps.second = bps.first;
				bps.first = value;
			} else if (value > bps.second && value !== bps.first) {
				bps.third = bps.second;
				bps.second = value;
			} else if (value > bps.third && value !== bps.first && value !== bps.second) {
				bps.third = value;
			}
		}
	}
}
