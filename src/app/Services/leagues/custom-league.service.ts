import { Injectable } from '@angular/core';
import { LeaguesService } from './leagues.service';
import { MainUserService } from '../main-user/main-user.service';
import CustomLeague from 'src/app/Models/CustomLeague';
import { Storage } from '@ionic/storage';
import League from 'src/app/Models/League';

@Injectable({
	providedIn: 'root'
})
export class CustomLeagueService {
	private customLeaguesKey = 'custom_leagues';
	public customLeagues = [];

	constructor(private storage: Storage, private leagueService: LeaguesService) {}

	async create(leagueName: string, members: number[]) {
		const id = this.generateId();
		const newCustomLeague = new CustomLeague(id, leagueName, members);
		this.saveLeague(newCustomLeague);
	}

	generateId() {
		const d = new Date();
		return d.getTime();
	}

	saveLeague(customLeague: CustomLeague) {
		this.customLeagues.push(customLeague);
		this.storage.set(this.customLeaguesKey, this.customLeagues);
	}

	async fetchLeagueData(league: CustomLeague) {
		// recreates league so data is fresh
		return await this.leagueService.createLeague(league.members, league.name, league.id);
	}

	/**
   * retrieves league object from storage
   * @param id league id
   */
	async getLeague(id: number): Promise<CustomLeague> {
		const leagues = await this.storage.get(this.customLeaguesKey);
		return leagues.find((league) => league.id === id);
	}

	async getLeagues() {
		const leagues = await this.storage.get(this.customLeaguesKey);
		this.customLeagues = leagues || [];
		return this.customLeagues;
	}

	remove(league: League) {
		this.customLeagues = this.customLeagues.filter((custom) => custom.id !== league.id);
	}

	saveToDatabase() {
		this.storage.set(this.customLeaguesKey, this.customLeagues);
	}

	async addMemberToLeague(id: number, leagueId: number) {
		const custLeague = this.customLeagues.find(league => league.id === leagueId);
		custLeague.members.push(id);
		await this.saveToDatabase();
		return custLeague;
	}
}
