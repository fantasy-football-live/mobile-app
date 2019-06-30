import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
	providedIn: 'root'
})
export class GameweekHistoryService {
	history: any;

	constructor(private httpRequestService: HttpRequestService) {}

	getGameweekHistory(id: number): any {
		const res = this.httpRequestService.fetch(
			`https://fantasy.premierleague.com/drf/entry/${id}/history`
		);
		this.history = this.parse(res);
		return this.history;
	}

	private parse(data: any): any {
		return {
			activeChip: data.active_chip,
			picks: data.picks,
			value: data.entry_history.value,
			bank: data.entry_history.bank,
			gameweekTransfers: data.entry_history.event_transfers,
			gameweekTransfersCost: data.entry_history.event_transfers_cost
		};
	}
}
