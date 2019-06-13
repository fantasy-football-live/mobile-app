import League from './League';
import Team from './Team';
import CustomLeague from './CustomLeague';

export default class FantasyPlayer {
	activeChip: string;
	bank: number;
	value: number;
	countryImage: string;
	gameweekRank = 0;
	gameweekTransfers: number;
	gameweekTransfersCost: number;
	id: number;
	leagues: League[];
	customLeagues: CustomLeague[];
	name: string;
	overallRank = 0;
	team: Team;

	constructor(
		activeChip = '',
		bank = 0,
		value = 0,
		countryImage = '',
		gameweekRank = -1,
		gameweekTransfers = 0,
		gameweekTransfersCost = 0,
		id = -1,
		leagues = [],
		name = '',
		overallRank = -1,
		team = new Team()
	) {
		this.activeChip = activeChip;
		this.bank = bank;
		this.countryImage = countryImage;
		this.gameweekRank = gameweekRank;
		this.gameweekTransfers = gameweekTransfers;
		this.gameweekTransfersCost = gameweekTransfersCost;
		this.id = id;
		this.leagues = leagues;
		this.name = name;
		this.overallRank = overallRank;
		this.team = team;
		this.value = value;
		this.customLeagues = [];
	}
}
