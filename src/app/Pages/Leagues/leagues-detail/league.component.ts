import {
	Component,
	OnInit
} from '@angular/core';
import {
	NavParams
} from '@ionic/angular';
import {
	ModalController
} from '@ionic/angular';

import FantasyPlayer from '../../../Models/FantasyPlayer';
import League from '../../../Models/League';
import {
	LeaguesService
} from 'src/app/Services/leagues/leagues.service';
import {
	TeamPageComponent
} from 'src/app/Components/team-page/team-page.component';
import {
	MainUserService
} from 'src/app/Services/main-user/main-user.service';
import {
	CustomLeagueService
} from 'src/app/Services/leagues/custom-league.service';

@Component({
	selector: 'app-league',
	templateUrl: './league.component.html',
	styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
	league: League = null;
	fantasyPlayer: FantasyPlayer;
	showSpinner = true;
	maxTries = 5;
	leagueStanding = [];
	isCustom = false;
	newMemberId = null;

	constructor(
		public modalController: ModalController,
		private navParams: NavParams,
		private leaguesService: LeaguesService,
		private mainUserService: MainUserService,
		private customLeagueService: CustomLeagueService
	) {}

	ngOnInit() {
		this.retrieveLeagueData();
	}

	async retrieveLeagueData(): Promise < any > {
		this.isCustom = this.navParams.data.isCustom;
		const id = this.navParams.data.leagueId;
		if (!this.isCustom) {
			const league = await this.leaguesService.getLeague(id);
			return this.onLeagueLoaded(league);
		} else {
			const custLeague = await this.customLeagueService.getLeague(id);
			this.customLeagueService
				.fetchLeagueData(custLeague)
				.then((league_2) => this.onLeagueLoaded(league_2));
		}
	}

	onLeagueLoaded(league) {
		this.league = league;
		this.leagueStanding = this.league.sort();
		this.showSpinner = false;
		return this.league;
	}

	/**
	 * @description the league view is a modal, this closes it
	 */
	closeModal() {
		this.modalController.dismiss();
	}

	/**
	 * @param event method that responds to the refresh pulldown event on the view
	 */
	refreshPulldown(event) {
		this.retrieveLeagueData().then(() => event.target.complete());
	}

	/**
	 * @description loads a detailed view of the player selected
	 * @param playerId id of the player in the league selected by the user
	 */
	async onPlayerSelected(playerId: number) {
		const selectedPlayer = this.league.members.get(playerId);
		const modal = await this.modalController.create({
			component: TeamPageComponent,
			componentProps: {
				fantasyPlayer: selectedPlayer,
				showCloseButton: true
			}
		});
		return await modal.present();
	}

	/**
	 * deletes a custom league
	 */
	deleteLeague() {
		this.customLeagueService.remove(this.league);
		this.customLeagueService.saveToDatabase();
		this.modalController.dismiss();
		return;
	}

	async addMember(id: number, leagueId: number) {
		if (id === null) {
			return;
		}
		await this.customLeagueService.addMemberToLeague(id, leagueId);
		this.retrieveLeagueData().then(() => {
			(<HTMLElement>document.querySelector('.new-member-id__input__container')).style.display = 'none';
			this.newMemberId = null;
		});
	}

	openAddMemberModal() {
		(<HTMLElement>document.querySelector('.new-member-id__input__container')).style.display = 'flex';
	}
}
