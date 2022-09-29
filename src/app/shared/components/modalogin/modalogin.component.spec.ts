import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaloginComponent } from './modalogin.component';

describe('ModaloginComponent', () => {
  let component: ModaloginComponent;
  let fixture: ComponentFixture<ModaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
