import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { MainUserService } from '../Services/main-user/main-user.service';
import { CustomLeagueService } from '../Services/leagues/custom-league.service';

@Injectable({
	providedIn: 'root'
})
export class LoginGuard implements CanActivate {
	constructor(
		private storage: Storage,
		private router: Router,
		private mainUserService: MainUserService,
		private customLeagueService: CustomLeagueService
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		return this.mainUserService.user != null;
		// return this.storage.get('user').then((user) => {
		// 	if (user) {
		// 		return true;
		// 	} else {
		// 		this.router.navigateByUrl(`/tabs/home`);
		// 		return false;
		// 	}
		// });
	}
}
