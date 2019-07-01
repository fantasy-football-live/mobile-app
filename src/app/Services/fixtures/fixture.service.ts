import { Injectable } from '@angular/core';
import Urls from '../../Config/Urls';
import { HttpRequestService } from '../http-request/http-request.service';
import { StaticDataService } from '../static-data/static.data.service';
@Injectable({
	providedIn: 'root'
})
export class FixtureService {
	constructor(
		private httpRequest: HttpRequestService,
		private staticDataService: StaticDataService
	) {}

	fetch() {}
	getBadge(team) {
		return `/assets/badges/${team}.png`;
	}

	getTeamName(teams, id) {
		return teams.find((team) => team.id === id).name;
	}

	async getFixtures(gameweek: number) {
		const url = `${Urls.base}fixtures/?event=${gameweek}`;
		return await this.httpRequest.fetch(url);
	}

	async getUpcomingFixtures() {
		const gameweek = await this.staticDataService.getUpcomingGameweek();
		return this.getFixtures(gameweek);
	}

	createFixtureList(fixtures, teams) {
		return fixtures.map((fixture) => {
			const [ homeTeam, awayTeam ] = [
				this.getTeamName(teams, fixture.team_h),
				this.getTeamName(teams, fixture.team_a)
			];

			return {
				home_team: homeTeam,
				away_team: awayTeam,
				time: fixture.kickoff_time_formatted,
				badge_home: this.getBadge(homeTeam)
			};
		});
	}
}
