import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';
import Urls from '../../Config/Urls';
@Injectable({
	providedIn: 'root'
})
export class GameweekHistoryService {
	constructor(private httpRequestService: HttpRequestService) {}

	fetch(id: number) {
		const url = `${Urls.base_url}entry/${id}/history`;
		const data = this.httpRequestService.fetch(url);
		return this.parse(data);
	}

	parse(data: any) {
		
	}
}
