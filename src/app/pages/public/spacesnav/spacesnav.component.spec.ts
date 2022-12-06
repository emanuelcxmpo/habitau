import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacesnavComponent } from './spacesnav.component';

describe('SpacesnavComponent', () => {
  let component: SpacesnavComponent;
  let fixture: ComponentFixture<SpacesnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacesnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacesnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
