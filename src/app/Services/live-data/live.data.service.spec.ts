import { TestBed } from '@angular/core/testing';

import { Live.DataService } from './live.data.service';

describe('Live.DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Live.DataService = TestBed.get(Live.DataService);
    expect(service).toBeTruthy();
  });
});
