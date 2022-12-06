import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentnavComponent } from './rentnav.component';

describe('RentnavComponent', () => {
  let component: RentnavComponent;
  let fixture: ComponentFixture<RentnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
