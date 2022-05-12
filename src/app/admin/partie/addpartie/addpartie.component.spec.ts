import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpartieComponent } from './addpartie.component';

describe('AddpartieComponent', () => {
  let component: AddpartieComponent;
  let fixture: ComponentFixture<AddpartieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpartieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
