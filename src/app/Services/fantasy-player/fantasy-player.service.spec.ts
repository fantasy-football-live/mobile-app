import { TestBed } from '@angular/core/testing';

import { FantasyPlayerService } from './fantasy-player.service';

describe('FplTeamServiceService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: FantasyPlayerService = TestBed.get(FantasyPlayerService);
		expect(service).toBeTruthy();
	});
});
