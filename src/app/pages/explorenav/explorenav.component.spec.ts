import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorenavComponent } from './explorenav.component';

describe('ExplorenavComponent', () => {
  let component: ExplorenavComponent;
  let fixture: ComponentFixture<ExplorenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
