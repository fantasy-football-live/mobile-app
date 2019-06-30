import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';
import { MainUserService } from '../main-user/main-user.service';

@Injectable({
	providedIn: 'root'
})
export class GameweekDataService {
	data: any;
	constructor(
		private httpRequestService: HttpRequestService,
		private mainUser: MainUserService
	) {}

	async getGameweekData(gameweek: number): Promise<any> {
		if (this.mainUser.Id) {
			const res = await this.httpRequestService.fetch(
				`https://fantasy.premierleague.com/drf/entry/${this.mainUser
					.Id}/event/${gameweek}/picks`
			);
			this.data = this.parse(res);
			return res;
		}
	}

	private parse(data: any) {
		return {
			leagues: data.leagues.classic,
			name: `${data.entry.player_first_name} ${data.entry.player_last_name}`,
			countryImage: `assets/country_flags/${data.entry.player_region_short_iso}.gif`,
			teamName: data.entry.name,
			lastWeekOverallPoints: data.history[data.history.length - 1],
			overallRank: data.history[data.history.length - 1].overall_rank
		};
	}
}
