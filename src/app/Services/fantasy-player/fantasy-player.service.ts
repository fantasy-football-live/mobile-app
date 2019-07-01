import { Injectable } from '@angular/core';
import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import SoccerPlayer from 'src/app/Models/SoccerPlayer';
import Team from 'src/app/Models/Team';
import { GameweekDataService } from '../gameweek-data/gameweek-data.service';
import { GameweekHistoryService } from '../gameweek-history/gameweek-history.service';
import { SoccerPlayerService } from '../soccer-player/soccerplayer.service';
import { Storage } from '@ionic/storage';
import { BonusPointService } from '../bonus-point/bonus-point.service';

@Injectable({
	providedIn: 'root'
})
export class FantasyPlayerService {
	positionMap = {
		1: 'Goalkeeper',
		2: 'Defender',
		3: 'Midfielder',
		4: 'Forward'
	};

	constructor(
		private gameweekDataService: GameweekDataService,
		private gameweekHistoryService: GameweekHistoryService,
		private soccerPlayerService: SoccerPlayerService,
		private storage: Storage,
		private bonusPointService: BonusPointService
	) {}

	/**
   *
   * @param id fpl id
   * @description creates a fantasy premier league player
   * @returns FantasyPlayer object
   */
	async createPlayer(
		id: number,
		liveData: any,
		soccerPlayers: Map<number, any>,
		currentGameweek: number
	): Promise<FantasyPlayer> {
		const key = `id-${id} gameweek-${currentGameweek}`;

		const userGameweekData = await this.gameweekDataService.getGameweekData(
			id,
			currentGameweek
		);
		const previousGameweeksHistory = await this.gameweekHistoryService.fetch(id);
		const playerData = this.parsePlayerData(
			userGameweekData,
			previousGameweeksHistory,
			currentGameweek
		);
		const team = new Team(id, playerData.teamName, playerData.lastWeekOverallPoints);
		const newFantasyPlayer = new FantasyPlayer(
			playerData.activeChip,
			playerData.bank,
			playerData.value,
			playerData.countryImage,
			0,
			playerData.gameweekTransfers,
			playerData.gameweekTransfersCost,
			id,
			playerData.leagues,
			playerData.name,
			playerData.overallRank,
			team
		);

		this.storage.set(key, {
			userGameweekData,
			previousGameweeksHistory,
			playerData,
			team,
			newFantasyPlayer
		});

		this.populateSquad(playerData.picks, newFantasyPlayer, liveData, soccerPlayers);
		return newFantasyPlayer;
	}

	/**
	 * extracts relevant data from objects return from FPL API
	 * @param userGameweekData {}
	 * @param previousGameweekHistory {}
	 * @param currentGameweek {number}
	 */
	private parsePlayerData(
		userGameweekData: any,
		previousGameweekHistory: any,
		currentGameweek: number
	) {
		const leagues = previousGameweekHistory.leagues.classic,
			activeChip = userGameweekData.active_chip,
			name = `${previousGameweekHistory.entry.player_first_name} ${previousGameweekHistory
				.entry.player_last_name}`,
			countryImage = `assets/country_flags/${previousGameweekHistory.entry
				.player_region_short_iso}.gif`,
			teamName = previousGameweekHistory.entry.name,
			lastWeekOverallPoints = previousGameweekHistory.history.find(
				(gameweek) => gameweek.event === currentGameweek - 1
			).total_points,
			picks = userGameweekData.picks,
			value = userGameweekData.entry_history.value,
			bank = userGameweekData.entry_history.bank,
			gameweekTransfers = userGameweekData.entry_history.event_transfers,
			gameweekTransfersCost = userGameweekData.entry_history.event_transfers_cost,
			overallRank = previousGameweekHistory.history.pop().overall_rank;

		return {
			leagues,
			activeChip,
			name,
			countryImage,
			teamName,
			lastWeekOverallPoints,
			picks,
			bank,
			value,
			gameweekTransfers,
			gameweekTransfersCost,
			overallRank
		};
	}

	private populateSquad(
		picks: any[],
		fantasyPlayer: FantasyPlayer,
		liveData: any,
		players: Map<number, any>
	) {
		// tslint:disable-next-line: prefer-const
		let totalPoints = 0;
		const livePlayerData = liveData['elements'];
		const liveFixturesData = liveData['fixtures'];
		for (const pick of picks) {
			const currentPlayer = players.get(pick.element),
				position = this.positionMap[currentPlayer.element_type],
				image = this.soccerPlayerService.getPhotoUrl(currentPlayer.id, players),
				playerStats = livePlayerData[currentPlayer.id]['stats'],
				currentPlayerGWPoints =
					playerStats['total_points'] -
					playerStats['bonus'] +
					this.bonusPointService.parseLiveBonusPoints(liveFixturesData, currentPlayer.id),
				newPlayer = new SoccerPlayer(
					pick.element,
					image,
					null,
					currentPlayerGWPoints,
					currentPlayer.web_name,
					position
				);

			// calculate total gameweek points
			if (fantasyPlayer.activeChip === 'bboost' || pick.position < 12) {
				totalPoints += currentPlayerGWPoints * pick.multiplier;
			}

			// add players to position arrays
			if (pick.position < 12) {
				fantasyPlayer.team[`${position}s`].push(newPlayer);
			} else {
				fantasyPlayer.team[`Bench`].push(newPlayer);
			}

			if (pick.is_captain) {
				newPlayer.gameweekPoints *= pick.multiplier;
				fantasyPlayer.team.captainId = pick.element;
				fantasyPlayer.team.captainName = newPlayer.name;
				fantasyPlayer.team.captainImage = image;
			}
		}
		fantasyPlayer.team.gameweekPoints = totalPoints;
		fantasyPlayer.team.overallPoints += totalPoints - fantasyPlayer.gameweekTransfersCost;
		return fantasyPlayer;
	}
}
