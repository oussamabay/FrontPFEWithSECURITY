import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonDeCommandeComponent } from './bon-de-commande.component';

describe('BonDeCommandeComponent', () => {
  let component: BonDeCommandeComponent;
  let fixture: ComponentFixture<BonDeCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonDeCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonDeCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
