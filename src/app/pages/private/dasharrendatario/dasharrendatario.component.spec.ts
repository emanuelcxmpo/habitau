import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasharrendatarioComponent } from './dasharrendatario.component';

describe('DasharrendatarioComponent', () => {
  let component: DasharrendatarioComponent;
  let fixture: ComponentFixture<DasharrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasharrendatarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasharrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
