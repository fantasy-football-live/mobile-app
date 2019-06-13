import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchTeamInfoComponent } from './pitch-team-info.component';

describe('PitchTeamInfoComponent', () => {
  let component: PitchTeamInfoComponent;
  let fixture: ComponentFixture<PitchTeamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchTeamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchTeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
