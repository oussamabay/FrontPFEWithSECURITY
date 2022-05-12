import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordGestionProdComponent } from './dashbord-gestion-prod.component';

describe('DashbordGestionProdComponent', () => {
  let component: DashbordGestionProdComponent;
  let fixture: ComponentFixture<DashbordGestionProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordGestionProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordGestionProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
