import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminambienteComponent } from './adminambiente.component';

describe('AdminambienteComponent', () => {
  let component: AdminambienteComponent;
  let fixture: ComponentFixture<AdminambienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminambienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminambienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
