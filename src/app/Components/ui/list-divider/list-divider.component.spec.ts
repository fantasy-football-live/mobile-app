import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDividerComponent } from './list-divider.component';

describe('ListDividerComponent', () => {
  let component: ListDividerComponent;
  let fixture: ComponentFixture<ListDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
