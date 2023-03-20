import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintipopropiedadesComponent } from './admintipopropiedades.component';

describe('AdmintipopropiedadesComponent', () => {
  let component: AdmintipopropiedadesComponent;
  let fixture: ComponentFixture<AdmintipopropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintipopropiedadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintipopropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
