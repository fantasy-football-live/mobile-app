import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';
import Urls from '../../Config/Urls';

@Injectable({
	providedIn: 'root'
})
export class LiveDataService {
	constructor(private httpRequestService: HttpRequestService) {}

	fetch(gameweek: number): Promise<any> {
		return this.httpRequestService.fetch(`${Urls.base}/event/${gameweek}/live`);
	}
}
