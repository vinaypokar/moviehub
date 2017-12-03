/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddactorComponent } from './addactor.component';

describe('AddactorComponent', () => {
  let component: AddactorComponent;
  let fixture: ComponentFixture<AddactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
