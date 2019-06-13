export default class SoccerPlayer {
	id: number;
	image: any;
	fixtures: any[];
	gameweekPoints: number;
	name: string;
	position: string;

	constructor(
		id = -1,
		image = null,
		fixtures = [],
		gameweekPoints = -1,
		name = '',
		position = '',
	) {
		this.id = id;
		this.image = image;
		this.fixtures = fixtures;
		this.gameweekPoints = gameweekPoints;
		this.name = name;
		this.position = position;
	}
}
