import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdistadeComponent } from './edistade.component';

describe('EdistadeComponent', () => {
  let component: EdistadeComponent;
  let fixture: ComponentFixture<EdistadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdistadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdistadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
