import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBonCommandeClientComponent } from './add-bon-commande-client.component';

describe('AddBonCommandeClientComponent', () => {
  let component: AddBonCommandeClientComponent;
  let fixture: ComponentFixture<AddBonCommandeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBonCommandeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonCommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
