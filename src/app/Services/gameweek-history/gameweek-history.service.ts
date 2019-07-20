import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';
import Urls from '../../Constants/Urls';
@Injectable({
	providedIn: 'root'
})
export class GameweekHistoryService {
	constructor(private httpRequestService: HttpRequestService) {}

	getGameweekHistory(id: number) {
		const url = `${Urls.base_url}entry/${id}/history`;
		const data = this.httpRequestService.fetch(url);
		return this.parse(data);
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
