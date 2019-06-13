import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
	providedIn: 'root'
})
export class GameweekDataService {
	constructor(private httpRequestService: HttpRequestService) {}

	async getGameweekData(id: number, gameweek: number): Promise<any> {
		return await this.httpRequestService.fetch(
			`https://fantasy.premierleague.com/drf/entry/${id}/event/${gameweek}/picks`
		);
	}
}
