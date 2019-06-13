import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
	providedIn: 'root'
})
export class GameweekHistoryService {
	constructor(private httpRequestService: HttpRequestService) {}

	fetch(id: number) {
		return this.httpRequestService.fetch(
			`https://fantasy.premierleague.com/drf/entry/${id}/history`
		);
	}
}
