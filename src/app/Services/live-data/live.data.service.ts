import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';


@Injectable({
	providedIn: 'root'
})
export class LiveDataService {
	constructor(private httpRequestService: HttpRequestService) {}

	fetch(gameweek: number): Promise<any> {
		return this.httpRequestService.fetch(
			`https://fantasy.premierleague.com/drf/event/${gameweek}/live`
		);
	}
}
