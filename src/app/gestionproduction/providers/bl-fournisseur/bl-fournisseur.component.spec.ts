import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlFournisseurComponent } from './bl-fournisseur.component';

describe('BlFournisseurComponent', () => {
  let component: BlFournisseurComponent;
  let fixture: ComponentFixture<BlFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
