import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjoueurComponent } from './editjoueur.component';

describe('EditjoueurComponent', () => {
  let component: EditjoueurComponent;
  let fixture: ComponentFixture<EditjoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditjoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
