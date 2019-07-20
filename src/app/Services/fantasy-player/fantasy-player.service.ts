import { Injectable } from '@angular/core';
import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import SoccerPlayer from 'src/app/Models/SoccerPlayer';
import Team from 'src/app/Models/Team';
import { GameweekDataService } from '../gameweek-data/gameweek-data.service';
import { GameweekHistoryService } from '../gameweek-history/gameweek-history.service';
import { SoccerPlayerService } from '../soccer-player/soccerplayer.service';
import { BonusPointService } from '../bonus-point/bonus-point.service';
import { MyTeamService } from '../MyTeam/my-team.service';

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
		private bonusPointService: BonusPointService,
		private teamService: MyTeamService
	) {}

	/**
   *
   * @param id fpl id
   * @description creates a fantasy premier league player
   * @returns FantasyPlayer object
   */
	async createPlayer(id: number, currentGameweek: number): Promise<FantasyPlayer> {
		// const teamData = await this.teamService.fetchMyTeam(id);
		// const gameweekData = await this.gameweekDataService.getGameweekData(id, currentGameweek);
		const previousGameweeksHistory = await this.gameweekHistoryService.getGameweekHistory(id);
		// const team = new Team(id, gameweekData.teamName, gameweekData.lastWeekOverallPoints);
		// const newFantasyPlayer = new FantasyPlayer(
		// 	previousGameweeksHistory.activeChip,
		// 	previousGameweeksHistory.bank,
		// 	previousGameweeksHistory.value,
		// 	gameweekData.countryImage,
		// 	0,
		// 	previousGameweeksHistory.gameweekTransfers,
		// 	previousGameweeksHistory.gameweekTransfersCost,
		// 	id,
		// 	gameweekData.leagues,
		// 	gameweekData.name,
		// 	gameweekData.overallRank,
		// 	team
		// );
		// return newFantasyPlayer;
		return new FantasyPlayer();
	}
}
