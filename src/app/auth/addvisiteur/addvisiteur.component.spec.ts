import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvisiteurComponent } from './addvisiteur.component';

describe('AddvisiteurComponent', () => {
  let component: AddvisiteurComponent;
  let fixture: ComponentFixture<AddvisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
