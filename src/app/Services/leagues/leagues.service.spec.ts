import { TestBed } from '@angular/core/testing';

import { LeaguesService } from './leagues.service';

describe('LeaguesServiceService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: LeaguesService = TestBed.get(LeaguesService);
		expect(service).toBeTruthy();
	});
});
