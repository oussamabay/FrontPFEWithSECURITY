import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarbitreComponent } from './editarbitre.component';

describe('EditarbitreComponent', () => {
  let component: EditarbitreComponent;
  let fixture: ComponentFixture<EditarbitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarbitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarbitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
