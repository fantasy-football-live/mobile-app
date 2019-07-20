import { Component, OnInit } from '@angular/core';

import { MainUserService } from 'src/app/Services/main-user/main-user.service';
import SoccerPlayer from 'src/app/Models/SoccerPlayer';
import { SoccerPlayerService } from 'src/app/Services/soccer-player/soccerplayer.service';
import { LiveDataService } from 'src/app/Services/live-data/live.data.service';

@Component({
	selector: 'app-team',
	templateUrl: './team.page.html',
	styleUrls: [ './team.page.scss' ]
})
export class TeamPage implements OnInit {
	showSpinner = true;
	constructor(
		private soccerPlayerService: SoccerPlayerService,
		public mainUserService: MainUserService,
		private liveDataService: LiveDataService
	) {}

	ngOnInit() {
		if (this.mainUserService.user.team != null) {
			this.showSpinner = false;
		}
		// if (this.mainUserService.user) {
		// 	this.loadUpcomingFixtures().then(() => (this.showSpinner = false));
		// }
	}

	async loadFixtures(players: SoccerPlayer[]) {
		const playerFixtures = await Promise.all(
			players.map((player) => this.soccerPlayerService.getUpcomingFixtures(player.id))
		);
		for (let index = 0; index < players.length; index++) {
			players[index].fixtures = playerFixtures[index];
		}
		return players;
	}

	async loadUpcomingFixtures() {
		return Promise.all([
			this.loadFixtures(this.mainUserService.user.team.Goalkeepers),
			this.loadFixtures(this.mainUserService.user.team.Defenders),
			this.loadFixtures(this.mainUserService.user.team.Midfielders),
			this.loadFixtures(this.mainUserService.user.team.Forwards),
			this.loadFixtures(this.mainUserService.user.team.Bench)
		]).then(([ g, d, m, f, b ]) => {
			this.mainUserService.user.team.Goalkeepers = g;
			this.mainUserService.user.team.Defenders = d;
			this.mainUserService.user.team.Midfielders = m;
			this.mainUserService.user.team.Forwards = f;
			this.mainUserService.user.team.Bench = b;
			this.mainUserService.save();
		});
	}

	refreshUser(event: { target: { complete: () => void } }) {
		this.refresh().then(() => {
			event.target.complete();
			this.loadUpcomingFixtures();
		});
	}

	async refresh() {
		const user = this.mainUserService.user.id;
		// re creates user - needs to be optimised
		return this.mainUserService.createUser(user);
	}
}
