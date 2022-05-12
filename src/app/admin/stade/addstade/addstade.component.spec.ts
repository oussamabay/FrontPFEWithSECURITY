import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstadeComponent } from './addstade.component';

describe('AddstadeComponent', () => {
  let component: AddstadeComponent;
  let fixture: ComponentFixture<AddstadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
