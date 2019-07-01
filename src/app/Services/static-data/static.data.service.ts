import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpRequestService } from '../http-request/http-request.service';
import SoccerPlayer from 'src/app/Models/SoccerPlayer';
import Url from '../../Config/Urls';
@Injectable({
	providedIn: 'root'
})
export class StaticDataService {
	staticData: any;
	storageKey = 'bootstrap';
	updateDataTime = 'update-bootstrap-time';

	constructor(private httpRequestService: HttpRequestService, private storage: Storage) {}

	/**
	 * @Returns returns a promise containing bootstrap data
	 * @description returns current gameweek, soccer player data, prem team data, next gw fixtures
	 * @param returnValue {string} key of the data you wish to extract, leaving empty wil return all the data
	 */

	private async fetch(returnValue: string = null) {
		return this.storage.get(this.updateDataTime).then(async (time) => {
			// compare next deadline time to current date
			// if current time is before the deadline you can get old data otherwise fetch new data

			// if (time && Date.now() <= new Date(time).getTime()) {
			// 	data = await this.storage.get(this.storageKey);
			// } else {
			// 	data = await this.httpRequestService.fetch(Url.bootstrap);
			// }
			if (this.staticData) {
				return returnValue != null ? this.staticData[returnValue] : this.staticData;
			}
			this.staticData = await this.httpRequestService.fetch(Url.bootstrap);
			const nextDeadline = this.staticData.events[0]
				? this.staticData.events[0].deadline_time
				: null;

			this.storage.set(this.updateDataTime, nextDeadline);
			this.storage.set(this.storageKey, this.staticData);
			return returnValue != null ? this.staticData[returnValue] : this.staticData;
		});
	}

	public async getCurrentGameweek(): Promise<number> {
		if (this.staticData) {
			return this.staticData['current-event'];
		}

		return this.fetch('current-event');
	}

	public async getUpcomingGameweek(): Promise<number> {
		const events = await this.fetch('events');
		// tslint:disable-next-line: no-shadowed-variable
		const event = events.filter((event: any) => event.is_next);
		return event[0].id;
	}

	public async getTeams(): Promise<any[]> {
		return this.fetch('teams');
	}

	public async getPlayers(): Promise<any[]> {
		return this.fetch('elements');
	}

	public async getPositionLabel(positionId: number): Promise<string> {
		const data = await this.fetch('element_types');
		return data.find((type) => type.id === positionId).singular_name;
	}
}
