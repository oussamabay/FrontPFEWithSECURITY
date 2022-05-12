import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarbiterComponent } from './addarbiter.component';

describe('AddarbiterComponent', () => {
  let component: AddarbiterComponent;
  let fixture: ComponentFixture<AddarbiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddarbiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarbiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
