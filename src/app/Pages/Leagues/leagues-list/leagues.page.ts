import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LeagueComponent } from 'src/app/Pages/Leagues/leagues-detail/league.component';
import { MainUserService } from 'src/app/Services/main-user/main-user.service';
import { CustomLeaguesComponent } from '../custom-leagues/custom-leagues.component';
import { CustomLeagueService } from 'src/app/Services/leagues/custom-league.service';

@Component({
	selector: 'app-leagues',
	templateUrl: './leagues.page.html',
	styleUrls: [ './leagues.page.scss' ]
})
export class LeaguesPage implements OnInit {

	constructor(
		private modalController: ModalController,
		public mainUserService: MainUserService,
		public customLeagueService: CustomLeagueService
	) {}

	ngOnInit() {}

	/**
	 * @param leagueId id of league
	 * @description creates a modal view of the league selected by the user
	 */
	async openLeague(leagueId: number, isCustom: boolean = false) {
		if (leagueId === null) {
			return null;
		}

		const modal = await this.modalController.create({
			component: LeagueComponent,
			animated: true,
			componentProps: {
				leagueId: leagueId,
				isCustom: isCustom
			}
		});

		return await modal.present();
	}

	async openAddCustomLeagueModal() {
		const modal = await this.modalController.create({
			component: CustomLeaguesComponent,
			animated: true
		});

		return await modal.present();
	}
}
