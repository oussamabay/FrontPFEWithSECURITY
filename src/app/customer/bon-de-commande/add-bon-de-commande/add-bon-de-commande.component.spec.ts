import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBonDeCommandeComponent } from './add-bon-de-commande.component';

describe('AddBonDeCommandeComponent', () => {
  let component: AddBonDeCommandeComponent;
  let fixture: ComponentFixture<AddBonDeCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBonDeCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonDeCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});