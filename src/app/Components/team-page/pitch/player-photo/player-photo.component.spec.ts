import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPhotoComponent } from './player-photo.component';

describe('PlayerPhotoComponent', () => {
  let component: PlayerPhotoComponent;
  let fixture: ComponentFixture<PlayerPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
