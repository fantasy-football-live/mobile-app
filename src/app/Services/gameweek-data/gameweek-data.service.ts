import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';
import Urls from '../../Config/Urls.js';
@Injectable({
	providedIn: 'root'
})
export class GameweekDataService {
	constructor(private httpRequestService: HttpRequestService) {}

	async getGameweekData(id: number, gameweek: number): Promise<any> {
		const url = `${Urls.base}/${id}/event/${gameweek}/picks`;
		return await this.httpRequestService.fetch(url);
	}
}
