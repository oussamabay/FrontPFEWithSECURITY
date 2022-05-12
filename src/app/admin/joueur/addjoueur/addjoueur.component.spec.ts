import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjoueurComponent } from './addjoueur.component';

describe('AddjoueurComponent', () => {
  let component: AddjoueurComponent;
  let fixture: ComponentFixture<AddjoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
