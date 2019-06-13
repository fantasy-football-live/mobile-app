import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HttpRequestService } from '../http-request/http-request.service';
import SoccerPlayer from 'src/app/Models/SoccerPlayer';
import { StaticDataService } from '../static-data/static.data.service';

@Injectable({
	providedIn: 'root'
})
export class SoccerPlayerService implements OnInit {
	players: Map<number, any> = new Map();
	constructor(
		private httpRequestService: HttpRequestService,
		private staticDataService: StaticDataService
	) {}

	ngOnInit() {
		this.load();
	}

	async load() {
		const arrayOfPlayers = await this.staticDataService.getPlayers(),
			playerMap = new Map();

		for (const player of arrayOfPlayers) {
			playerMap.set(player.id, player);
		}
		this.players = playerMap;
	}

	async getPlayerData(id: number) {
		return this.httpRequestService.fetch(
			`https://fantasy.premierleague.com/drf/element-summary/${id}`
		);
	}

	async getPlayers(): Promise<Map<number, any>> {
		const arrayOfPlayers = await this.staticDataService.getPlayers(),
			playerMap = new Map();

		for (const player of arrayOfPlayers) {
			playerMap.set(player.id, player);
		}
		return playerMap;
	}

	async createPlayer(id: number): Promise<SoccerPlayer> {
		return new SoccerPlayer(id);
	}

	getPlayerName(id: number, players: Map<number, any>) {
		return players.get(id).web_name;
	}

	getPhotoUrl(id: number, players: Map<number, any>) {
		const player = players.get(id);
		return '/assets/player_images/' + 'p' + player.photo.replace(/jpg/gi, 'webp');
	}

	async getPlayer(id: number) {
		return this.players.get(id);
	}

	async getUpcomingFixtures(id: number) {
		// const key = `player-${id} gameweek-${gameweek}`;
		// const stored = await this.storage.get(key);
		// if (stored) return stored;
		const data = await this.getPlayerData(id);
		// this.storage.set(key, data['fixtures']);
		return data['fixtures'];
	}
}
