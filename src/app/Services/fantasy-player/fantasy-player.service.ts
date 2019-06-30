import { Injectable } from '@angular/core';
import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import SoccerPlayer from 'src/app/Models/SoccerPlayer';
import Team from 'src/app/Models/Team';
import { GameweekDataService } from '../gameweek-data/gameweek-data.service';
import { GameweekHistoryService } from '../gameweek-history/gameweek-history.service';
import { SoccerPlayerService } from '../soccer-player/soccerplayer.service';
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
		private bonusPointService: BonusPointService
	) {}

	/**
   *
   * @param id fpl id
   * @description creates a fantasy premier league player
   * @returns FantasyPlayer object
   */
	async createPlayer(id: number, currentGameweek: number): Promise<FantasyPlayer> {
		const gameweekData = await this.gameweekDataService.getGameweekData(currentGameweek);
		const previousGameweeksHistory = await this.gameweekHistoryService.getGameweekHistory(id);
		const team = new Team(id, gameweekData.teamName, gameweekData.lastWeekOverallPoints);
		const newFantasyPlayer = new FantasyPlayer(
			previousGameweeksHistory.activeChip,
			previousGameweeksHistory.bank,
			previousGameweeksHistory.value,
			gameweekData.countryImage,
			0,
			previousGameweeksHistory.gameweekTransfers,
			previousGameweeksHistory.gameweekTransfersCost,
			id,
			gameweekData.leagues,
			gameweekData.name,
			gameweekData.overallRank,
			team
		);

		this.populateSquad(playerData.picks, newFantasyPlayer, liveData, soccerPlayers);
		return newFantasyPlayer;
	}

	private populateSquad(
		picks: any[],
		fantasyPlayer: FantasyPlayer,
		liveData: any,
		players: Map<number, any>
	) {
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
