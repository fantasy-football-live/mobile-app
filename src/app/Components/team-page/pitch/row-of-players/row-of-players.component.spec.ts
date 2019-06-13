import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowOfPlayersComponent } from './row-of-players.component';

describe('RowOfPlayersComponent', () => {
  let component: RowOfPlayersComponent;
  let fixture: ComponentFixture<RowOfPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowOfPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowOfPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
