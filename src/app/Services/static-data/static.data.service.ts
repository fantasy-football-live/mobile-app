import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpRequestService } from '../http-request/http-request.service';
import SoccerPlayer from 'src/app/Models/SoccerPlayer';

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
			let data = null;

			if (time && Date.now() <= new Date(time).getTime()) {
				data = await this.storage.get(this.storageKey);
			} else {
				data = await this.httpRequestService.fetch(
					'https://fantasy.premierleague.com/drf/bootstrap-static'
				);
			}
			this.staticData = data;
			let nextDeadline = null;

			if (data.next_event_fixtures.length) {
				nextDeadline = data.next_event_fixtures[0]
					? data.next_event_fixtures[0].deadline_time
					: null;
			}

			this.storage.set(this.updateDataTime, nextDeadline);
			this.storage.set(this.storageKey, this.staticData);
			return returnValue != null ? data[returnValue] : data;
		});
	}

	public async getCurrentGameweek(): Promise<number> {
		return this.fetch('current-event');
	}

	public async getUpcomingFixtures(): Promise<any[]> {
		return this.fetch('next_event_fixtures');
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
