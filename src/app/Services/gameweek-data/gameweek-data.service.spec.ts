import { TestBed } from '@angular/core/testing';

import { GameweekDataService } from './gameweek-data.service';

describe('GameweekDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameweekDataService = TestBed.get(GameweekDataService);
    expect(service).toBeTruthy();
  });
});
