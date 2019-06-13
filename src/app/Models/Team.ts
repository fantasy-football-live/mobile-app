import SoccerPlayer from './SoccerPlayer';

export default class Team {
	id: number;
	gameweekPoints: number;
	overallPoints: number;
	Goalkeepers: SoccerPlayer[];
	Defenders: SoccerPlayer[];
	Midfielders: SoccerPlayer[];
	Forwards: SoccerPlayer[];
	Bench: SoccerPlayer[];
	name: string;
	captainId: number;
	captainName: string;
	captainImage: string;
	value: number;
	bank = 0;

	constructor(
		id = -1,
		name = '',
		overallPoints = 0,
		Goalkeepers = [],
		Defenders = [],
		Midfielders = [],
		Forwards = [],
		Bench = [],
		captainId = 0,
		value = 0,
		bank = 0,
	) {
		this.id = id;
		this.name = name;
		this.overallPoints = overallPoints;
		this.gameweekPoints = 0;
		this.Goalkeepers = Goalkeepers;
		this.Defenders = Defenders;
		this.Midfielders = Midfielders;
		this.Forwards = Forwards;
		this.Bench = Bench;
		this.captainId = captainId;
		this.value = value;
		this.bank = bank;
	}
}
