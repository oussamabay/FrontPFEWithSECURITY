import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddportComponent } from './addport.component';

describe('AddportComponent', () => {
  let component: AddportComponent;
  let fixture: ComponentFixture<AddportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
