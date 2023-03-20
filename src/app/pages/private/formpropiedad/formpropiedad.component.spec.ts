import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpropiedadComponent } from './formpropiedad.component';

describe('FormpropiedadComponent', () => {
  let component: FormpropiedadComponent;
  let fixture: ComponentFixture<FormpropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpropiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormpropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
