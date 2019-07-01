import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import { FixtureService } from 'src/app/Services/fixtures/fixture.service';
import { MainUserService } from 'src/app/Services/main-user/main-user.service';
import { StaticDataService } from 'src/app/Services/static-data/static.data.service';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: [ './home.page.scss' ]
})
export class HomePage implements OnInit {
	public showSpinner = true;
	public upcomingFixtures = [];
	public FplId = null;
	public user: FantasyPlayer;

	constructor(
		public mainUserService: MainUserService,
		private router: Router,
		private staticDataService: StaticDataService,
		private fixtureService: FixtureService,
		private loginService: LoginService
	) {}

	ngOnInit() {
		this.loadFixtures();
	}

	async loadFixtures() {
		Promise.all([
			this.fixtureService.getUpcomingFixtures(),
			this.staticDataService.getTeams()
		]).then(([ fixtures, teams ]) => {
			this.upcomingFixtures = this.fixtureService.createFixtureList(fixtures, teams);
			this.mainUserService.loadSavedUser().then((user) => {
				// this.loginService.login();
				this.user = user;
				this.showSpinner = false;
			});
		});
	}

	onFantasyIdEntered(id: number) {
		this.mainUserService.createUser(id).then((user) => {
			this.user = user;
			this.showSpinner = false;
		});
	}

	navigateTo(url: string) {
		this.router.navigateByUrl(`/tabs${url}`);
	}
}
