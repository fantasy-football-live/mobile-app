import { TestBed } from '@angular/core/testing';

import { MainUserService } from './main-user.service';

describe('MainUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainUserService = TestBed.get(MainUserService);
    expect(service).toBeTruthy();
  });
});
