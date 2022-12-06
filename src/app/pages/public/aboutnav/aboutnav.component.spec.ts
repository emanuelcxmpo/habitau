import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutnavComponent } from './aboutnav.component';

describe('AboutnavComponent', () => {
  let component: AboutnavComponent;
  let fixture: ComponentFixture<AboutnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
