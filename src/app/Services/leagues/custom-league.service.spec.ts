import { TestBed } from '@angular/core/testing';

import { CustomLeagueService } from './custom-league.service';

describe('CustomLeagueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomLeagueService = TestBed.get(CustomLeagueService);
    expect(service).toBeTruthy();
  });
});
