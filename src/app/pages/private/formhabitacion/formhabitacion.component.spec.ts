import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhabitacionComponent } from './formhabitacion.component';

describe('FormhabitacionComponent', () => {
  let component: FormhabitacionComponent;
  let fixture: ComponentFixture<FormhabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormhabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormhabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
