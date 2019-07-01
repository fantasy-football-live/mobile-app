import { Injectable } from '@angular/core';
import League from 'src/app/Models/League';
import { FantasyPlayerService } from '../fantasy-player/fantasy-player.service';
import { HttpRequestService } from '../http-request/http-request.service';
import { LiveDataService } from '../live-data/live.data.service';
import { StaticDataService } from '../static-data/static.data.service';
import { SoccerPlayerService } from '../soccer-player/soccerplayer.service';
import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import Urls from '../../Config/Urls';

@Injectable({
	providedIn: 'root'
})
export class LeaguesService {
	constructor(
		private staticDataService: StaticDataService,
		private httpRequestService: HttpRequestService,
		private fantasyPlayerService: FantasyPlayerService,
		private liveDataService: LiveDataService,
		private soccerPlayerService: SoccerPlayerService
	) {}

	async createLeague(members: number[], name: string, id: number = null) {
		let currentGameweek = null,
			soccerPlayers = null;

		return Promise.all([
			this.staticDataService.getCurrentGameweek(),
			this.soccerPlayerService.getPlayers()
		])
			.then(([ gameweek, players ]) => {
				currentGameweek = gameweek;
				soccerPlayers = players;
				return this.liveDataService.fetch(currentGameweek);
			})
			.then((liveData) => {
				return Promise.all(
					members.map((memberId: number) =>
						this.fantasyPlayerService
							.createPlayer(memberId, liveData, soccerPlayers, currentGameweek)
							.catch(() => {
								// create new player with just basic info
								const p = new FantasyPlayer();
								p.id = id;
								p.name = 'failed';
								return p;
							})
					)
				);
			})
			.then((fantasyPlayers: any[]) => {
				const membersMap = new Map();
				// create map for easy retrieval of memebrs
				for (const player of fantasyPlayers) {
					if (player) {
						membersMap.set(player.id, player);
					}
				}
				const newLeague = new League(id, name, membersMap);
				return newLeague;
			});
	}
	async getLeague(id: number): Promise<League> {
		const leagueData = await this.httpRequestService.fetch(
			`${Urls.base}leagues-classic/${id}/standings`
		);
		const membersIds = leagueData.standings.results.map((member) => member.entry);
		return this.createLeague(membersIds, leagueData.league.name, leagueData.league.id);
	}
}
