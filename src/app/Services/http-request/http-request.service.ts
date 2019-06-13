import { Device } from '@ionic-native/device/ngx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpRequestService {
	constructor(
		private testHttp: HttpClient,
		private http: HTTP,
		private device: Device,
		private router: Router
	) {}

	/**
	 * @description public method used to request data from external api
	 * @param url string
	 */
	public async fetch(url: string, params: {} = {}, header: {} = {}) {
		return await this.fetchData(
			url,
			params,
			header
		).catch(err => console.log(err));
	}

	/**
	 *
	 * @param data returned response object from the http request
	 * @description parse the json string from the response object
	 */
	private parseJsonData(res: any) {
		if (res.url === 'https://fantasy.premierleague.com/updating/') {
			this.router.navigateByUrl('/updating');
			return null;
		}

		if (this.device.cordova) {
			return JSON.parse(res.data);
		}

		return res.json();
	}

	/**
	 * @description makes http calls
	 * @param url {string}
	 */
	private fetchData(url: string, param: {} = null, header: {} = null): Promise<any> {
		if (this.device.cordova) {
			return this.http.get(url, param, header);
		}

		return this.testHttp.get(url).toPromise();
	}
}
