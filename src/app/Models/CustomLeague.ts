import BaseLeague from './BaseLeague';

export default class CustomLeague extends BaseLeague {
	members: number[];

	constructor(id: number, name: string, members: number[]) {
		super(id, name);
		this.members = members;
	}
}
