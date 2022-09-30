import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionfiveComponent } from './sectionfive.component';

describe('SectionfiveComponent', () => {
  let component: SectionfiveComponent;
  let fixture: ComponentFixture<SectionfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionfiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
