import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlclientComponent } from './blclient.component';

describe('BlclientComponent', () => {
  let component: BlclientComponent;
  let fixture: ComponentFixture<BlclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
