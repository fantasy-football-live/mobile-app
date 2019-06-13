import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FixtureService {
	constructor() {}

	getBadge(team) {
		return `/assets/badges/${team}.png`;
	}

	getTeamName(teams, id) {
		return teams.find((team) => team.id === id).name;
	}

	createFixtureList(fixtures, teams) {
		return fixtures.map((fixture) => {
			const [homeTeam, awayTeam] = [this.getTeamName(teams, fixture.team_h), this.getTeamName(teams, fixture.team_a)];

			return {
				home_team: homeTeam,
				away_team: awayTeam,
				time: fixture.kickoff_time_formatted,
				badge_home: this.getBadge(homeTeam)
			};
		});
	}
}
