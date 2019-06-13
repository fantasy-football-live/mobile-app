import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import { TransferService } from 'src/app/Services/transfers/transfer.service';

@Component({
	selector: 'app-pitch',
	templateUrl: './pitch.component.html',
	styleUrls: [ './pitch.component.scss' ]
})
export class PitchComponent implements OnInit {
	@Input() fantasyPlayer: FantasyPlayer;
	@Input() captainId: number;

	constructor(

	) {}

	ngOnInit() {

	}
}
