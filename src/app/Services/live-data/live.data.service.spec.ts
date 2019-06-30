import { TestBed } from '@angular/core/testing';

import { LiveDataService } from './live.data.service';

describe('Live.DataService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: LiveDataService = TestBed.get(LiveDataService);
		expect(service).toBeTruthy();
	});
});
