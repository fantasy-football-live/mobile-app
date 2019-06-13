import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLeaguesComponent } from './custom-leagues.component';

describe('CustomLeaguesComponent', () => {
  let component: CustomLeaguesComponent;
  let fixture: ComponentFixture<CustomLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
