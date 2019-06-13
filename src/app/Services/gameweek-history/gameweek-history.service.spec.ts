import { TestBed } from '@angular/core/testing';

import { GameweekHistoryService } from './gameweek-history.service';

describe('GameweekHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameweekHistoryService = TestBed.get(GameweekHistoryService);
    expect(service).toBeTruthy();
  });
});
