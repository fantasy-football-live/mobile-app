import { Component, OnInit, Input } from '@angular/core';
import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import { TransferService } from 'src/app/Services/transfers/transfer.service';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-team-page',
	templateUrl: './team-page.component.html',
	styleUrls: [ './team-page.component.scss' ]
})
export class TeamPageComponent implements OnInit {
	@Input() fantasyPlayer: FantasyPlayer;
	gameweekTransfers: any[] = [];
	showSpinner = true;
	showCloseButton = false;

	constructor(
		private transferService: TransferService,
		private modalController: ModalController
	) {}

	ngOnInit() {
		// this.transferService.getGameweekTransfers(this.fantasyPlayer.team.id).then((transfers) => {
		// 	for (const transfer of transfers) {
		// 		this.gameweekTransfers.push(transfer);
		// 	}
		// 	this.showSpinner = false;
		// });
		this.showSpinner = false;
	}

	closeModal() {
		this.modalController.dismiss();
	}
}
