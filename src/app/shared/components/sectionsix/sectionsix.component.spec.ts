import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsixComponent } from './sectionsix.component';

describe('SectionsixComponent', () => {
  let component: SectionsixComponent;
  let fixture: ComponentFixture<SectionsixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
