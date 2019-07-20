import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import FantasyPlayer from 'src/app/Models/FantasyPlayer';
import { FantasyPlayerService } from '../fantasy-player/fantasy-player.service';
import { FcmService } from '../Firebase/fcm.service';
import { LiveDataService } from '../live-data/live.data.service';
import { StaticDataService } from '../static-data/static.data.service';
import { SoccerPlayerService } from '../soccer-player/soccerplayer.service';
import { CustomLeagueService } from '../leagues/custom-league.service';
import { HttpRequestService } from '../http-request/http-request.service';
import Team from 'src/app/Models/Team';
import { MyTeamService } from '../MyTeam/my-team.service';

@Injectable({
	providedIn: 'root'
})
export class MainUserService {
	public user: FantasyPlayer = null;
	public token = '';
	private userKey = 'user';
	private base_url = 'http://127.0.0.1:5000/';

	constructor(
		private storage: Storage,
		private fantasyPlayerService: FantasyPlayerService,
		private liveDataService: LiveDataService,
		private staticDataService: StaticDataService,
		private fcmService: FcmService,
		private teamService: MyTeamService,
		private customLeagueService: CustomLeagueService,
		private httpRequest: HttpRequestService
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

		return await this.fantasyPlayerService.createPlayer(id, gameweek).then((user) => {
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

	async login(username: string, password: string) {
		try {
			const res = await this.httpRequest.fetch('http://127.0.0.1:5000/login', {
				username: username,
				password: password
			});
			this.token = res.token;
			this.storage.set('token', this.token);
			console.log('this.token', this.token);
			return true;
		} catch (e) {
			return false;
		}
	}

	async getBasicInfo() {
		try {
			const res = await this.httpRequest.fetch('http://127.0.0.1:5000/me', {
				token: this.token
			});
			const fantasyPlayer = new FantasyPlayer();
			const player = res.player;
			fantasyPlayer.id = player.id;
			fantasyPlayer.name = player.name;
			fantasyPlayer.countryImage = 'assets/country_flags/' + player.country + '.gif';
			fantasyPlayer.leagues = player.leagues;

			const team = await this.teamService.populateSquad(player.picks, player.name);
			fantasyPlayer.team = team;
			console.log('fantasyPlayer :', fantasyPlayer);
			this.user = fantasyPlayer;
		} catch (e) {
			console.log('e', e);
		}
	}

	isLoggedIn() {
		return this.user != null;
	}
}
