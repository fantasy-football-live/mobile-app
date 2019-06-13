import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HttpRequestService } from '../http-request/http-request.service';
import { StaticDataService } from '../static-data/static.data.service';
import { SoccerPlayerService } from '../soccer-player/soccerplayer.service';

@Injectable({
	providedIn: 'root'
})
export class TransferService {
	constructor(
		private staticDataService: StaticDataService,
		private httpRequestService: HttpRequestService,
		private soccerPlayerService: SoccerPlayerService,
		private storage: Storage
	) {}

	async getGameweekTransfers(id: number) {
		const gameweek = await this.staticDataService.getCurrentGameweek();
		const players = await this.soccerPlayerService.getPlayers();
		const data = await this.httpRequestService.fetch(
			`https://fantasy.premierleague.com/drf/entry/${id}/transfers`
		);
		const transfers = data.history.filter((entry: any) => entry.event === gameweek);
		const key = `player-${id} gameweek-${gameweek} transfers`;
		const stored = await this.storage.get(key);

		if (stored) {
			return stored;
		}

		return transfers.map((transfer) => {
			const transferIn = this.getTransferInfo(transfer.element_in, players),
				transferOut = this.getTransferInfo(transfer.element_out, players);

			return {
				transferIn,
				transferOut
			};
		});
	}

	getTransferInfo(id, players) {
		const playerInName = this.soccerPlayerService.getPlayerName(
			id,
			players
		),
		playerInPhotoUrl = this.soccerPlayerService.getPhotoUrl(
			id,
			players
		);

		return {
			name: playerInName,
			image: playerInPhotoUrl
		};
	}
}
