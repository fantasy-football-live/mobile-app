import { Component, OnInit } from '@angular/core';
import League from 'src/app/Models/League';
import { FantasyPlayerService } from 'src/app/Services/fantasy-player/fantasy-player.service';
import { ModalController } from '@ionic/angular';
import { LeaguesService } from 'src/app/Services/leagues/leagues.service';
import { CustomLeagueService } from 'src/app/Services/leagues/custom-league.service';

@Component({
	selector: 'app-custom-leagues',
	templateUrl: './custom-leagues.component.html',
	styleUrls: [ './custom-leagues.component.scss' ]
})
export class CustomLeaguesComponent implements OnInit {
	newMembers = [];
	customLeagues = [];
	newLeagueName = '';
	memberId = null;

	constructor(
		private customLeagueService: CustomLeagueService,
		private modalController: ModalController
	) {}

	ngOnInit() {}

	async createLeague() {
		if (!this.newLeagueName || this.newMembers.length === 0) {
			// NEED TO ADD ALERT/TOAST
			return;
		}
		await this.customLeagueService.create(this.newLeagueName, this.newMembers);

		this.closeModal();
		return null;
	}

	addMember(id: number) {
		if (id == null) {
			return;
		} else if (!this.isMemberPresent(id)) {
			this.newMembers.push(id);
		}
		this.memberId = null;
	}

	isMemberPresent(id) {
		return this.newMembers.includes(id);
	}
	closeModal() {
		this.modalController.dismiss();
	}

	removeMember(memberId) {
		if (memberId == null) {
			return;
		}
		this.newMembers = this.newMembers.filter((member) => member !== memberId);
	}
}
