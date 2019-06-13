import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import { FantasyPlayerService } from '../fantasy-player/fantasy-player.service';
import { FcmService } from '../Firebase/fcm.service';
import { LiveDataService } from '../live-data/live.data.service';
import { StaticDataService } from '../static-data/static.data.service';
import { SoccerPlayerService } from '../soccer-player/soccerplayer.service';
import { CustomLeagueService } from '../leagues/custom-league.service';

@Injectable({
	providedIn: 'root'
})
export class MainUserService {
	public user: FantasyPlayer;
	private userKey = 'user';

	constructor(
		private storage: Storage,
		private fantasyPlayerService: FantasyPlayerService,
		private liveDataService: LiveDataService,
		private staticDataService: StaticDataService,
		private fcmService: FcmService,
		private soccerPlayerService: SoccerPlayerService,
		private customLeagueService: CustomLeagueService
	) {}

	async loadSavedUser() {
		this.user = await this.storage.get(this.userKey);
		return this.user;
	}

	async getSavedUserId() {
		const user = await this.storage.get(this.userKey);
		return user.id;
	}

	save() {
		this.storage.set(this.userKey, this.user);
	}

	/**
	 * @description creates the main user of the app
	 * @param id fpl id of user
	 */
	async createUser(id: number): Promise<FantasyPlayer> {
		const gameweek = await this.staticDataService.getCurrentGameweek();
		const liveData = await this.liveDataService.fetch(gameweek);
		const soccerPlayers = await this.soccerPlayerService.getPlayers();

		return await this.fantasyPlayerService
			.createPlayer(id, liveData, soccerPlayers, gameweek)
			.then((user) => {
				this.user = user;
				this.storage.set(this.userKey, user);
				this.updateDeviceToken(this.user.id);
				return user;
			});
	}

	private updateDeviceToken(id: number) {
		this.fcmService.getToken(id);
	}

	async updateUser(id: number) {

		// keep custom league and clear rest of the data
		const customLeagues = await this.customLeagueService.getLeagues();
		this.storage.clear();
		this.customLeagueService.customLeagues = customLeagues;
		this.customLeagueService.saveToDatabase();

		return await this.createUser(id);
	}

	getLivePoints() {}
}
