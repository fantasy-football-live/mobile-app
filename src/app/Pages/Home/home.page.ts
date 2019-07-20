import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import { FixtureService } from 'src/app/Services/fixtures/fixture.service';
import { MainUserService } from 'src/app/Services/main-user/main-user.service';
import { StaticDataService } from 'src/app/Services/static-data/static.data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: [ './home.page.scss' ]
})
export class HomePage implements OnInit {
	public showSpinner = true;
	public upcomingFixtures = [];
	public username = 'davidhiggins1712@gmail.com';
	public password = 'matchy123*';

	constructor(
		public mainUserService: MainUserService,
		private router: Router,
		private staticDataService: StaticDataService,
		private fixtureService: FixtureService
	) {}

	ngOnInit() {
		// this.loadFixtures();
		if (!this.mainUserService.isLoggedIn()) {
			this.showSpinner = false;
			return;
		}
	}

	async loadFixtures() {
		Promise.all([
			this.fixtureService.getUpcomingFixtures(),
			this.staticDataService.getTeams()
		]).then(([ fixtures, teams ]) => {
			this.upcomingFixtures = this.fixtureService.createFixtureList(fixtures, teams);
			this.mainUserService.loadSavedUser().then((user) => {
				// this.loginService.login();
				this.showSpinner = false;
			});
		});
	}

	async onLoginBtnPressed(email: string, password: string) {
		const res = await this.mainUserService.login(email, password);
		if (res) {
			const fantasyPlayerInfo = this.mainUserService.getBasicInfo();
			console.log('fantasyPlayerInfo', fantasyPlayerInfo);
		} else {
		}
	}

	navigateTo(url: string) {
		this.router.navigateByUrl(`/tabs${url}`);
	}
}
