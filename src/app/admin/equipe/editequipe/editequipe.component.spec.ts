import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditequipeComponent } from './editequipe.component';

describe('EditequipeComponent', () => {
  let component: EditequipeComponent;
  let fixture: ComponentFixture<EditequipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditequipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
