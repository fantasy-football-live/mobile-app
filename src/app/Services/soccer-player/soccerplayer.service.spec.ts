import { TestBed } from '@angular/core/testing';

import { SoccerplayerService } from './soccerplayer.service';

describe('SoccerplayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoccerplayerService = TestBed.get(SoccerplayerService);
    expect(service).toBeTruthy();
  });
});
