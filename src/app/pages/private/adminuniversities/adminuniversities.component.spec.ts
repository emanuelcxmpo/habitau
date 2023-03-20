import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuniversitiesComponent } from './adminuniversities.component';

describe('AdminuniversitiesComponent', () => {
  let component: AdminuniversitiesComponent;
  let fixture: ComponentFixture<AdminuniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminuniversitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminuniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
