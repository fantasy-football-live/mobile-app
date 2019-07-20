import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';
import Urls from '../../Constants/Urls.js';
@Injectable({
	providedIn: 'root'
})
export class GameweekDataService {
	constructor(private httpRequestService: HttpRequestService) {}

	async getGameweekData(id: number, gameweek: number): Promise<any> {
		const url = `${Urls.base}/${id}/event/${gameweek}/picks`;
		const data = await this.httpRequestService.fetch(url);
		return this.parse(data);
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
