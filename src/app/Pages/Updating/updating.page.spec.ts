import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingPage } from './updating.page';

describe('UpdatingPage', () => {
  let component: UpdatingPage;
  let fixture: ComponentFixture<UpdatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
