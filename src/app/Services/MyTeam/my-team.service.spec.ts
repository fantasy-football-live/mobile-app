import { TestBed } from '@angular/core/testing';

import { MyTeamService } from './my-team.service';

describe('MyTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyTeamService = TestBed.get(MyTeamService);
    expect(service).toBeTruthy();
  });
});
