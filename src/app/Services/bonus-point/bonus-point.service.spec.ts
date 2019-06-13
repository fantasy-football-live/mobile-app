import { TestBed } from '@angular/core/testing';

import { BonusPointService } from './bonus-point.service';

describe('BonusPointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonusPointService = TestBed.get(BonusPointService);
    expect(service).toBeTruthy();
  });
});
