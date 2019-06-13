import FantasyPlayer from './FantasyPlayer';
import BaseLeague from './BaseLeague';
export default class League extends BaseLeague {
	members: Map<number, FantasyPlayer>;

	constructor(id = -1, name = '', members = new Map<number, FantasyPlayer>()) {
		super(id, name);
		this.members = members;
	}

	sort() {
		return Array.from(this.members.values()).sort(
			(a, b) => b.team.overallPoints - a.team.overallPoints
		);
	}
}
