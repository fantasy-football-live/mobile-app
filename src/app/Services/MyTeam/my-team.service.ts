import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';
import Team from 'src/app/Models/Team';
import { SoccerPlayerService } from '../soccer-player/soccerplayer.service';
import SoccerPlayer from 'src/app/Models/SoccerPlayer';
@Injectable({
	providedIn: 'root'
})
export class MyTeamService {
	data: {
		picks: any[];
		leagues: any[];
		player_name: string;
		country: string;
	};

	positionMap = {
		1: 'Goalkeeper',
		2: 'Defender',
		3: 'Midfielder',
		4: 'Forward'
	};

	constructor(
		private httpRequest: HttpRequestService,
		private soccerPlayerService: SoccerPlayerService
	) {}

	async populateSquad(picks: any[], name: string) {
		const team = new Team();
		const playerList = await this.soccerPlayerService.getPlayers();

		for (const pick of picks) {
			const currentPlayer = playerList.get(pick.element),
				position = this.positionMap[currentPlayer.element_type],
				image = this.soccerPlayerService.getPhotoUrl(currentPlayer.id, playerList),
				newPlayer = new SoccerPlayer(
					pick.element,
					image,
					null,
					currentPlayer.web_name,
					position
				);
			if (pick.position < 12) {
				team[`${position}s`].push(newPlayer);
			} else {
				team[`Bench`].push(newPlayer);
			}

			if (pick.is_captain) {
				team.captainId = pick.element;
				team.captainName = newPlayer.name;
				team.captainImage = image;
			}
		}
		team.name = name;
		return team;
	}
}
