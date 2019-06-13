import { Component, OnInit } from '@angular/core';

import { BonusPointService } from 'src/app/Services/bonus-point/bonus-point.service';
import { MainUserService } from 'src/app/Services/main-user/main-user.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: [ './settings.page.scss' ]
})
export class SettingsPage implements OnInit {
	includeBonusPoints = false;
	canEnterNewId = false;
	newID = null;

	constructor(
		private bonusPointService: BonusPointService,
		public mainUserService: MainUserService
	) {}

	ngOnInit() {}

	toggleIdInput() {
		this.canEnterNewId = !this.canEnterNewId;
	}

	updateId(id: number) {
		if (!id) {
			return null;
		}
		this.mainUserService.updateUser(id);
		this.canEnterNewId = !this.canEnterNewId;
	}
}
