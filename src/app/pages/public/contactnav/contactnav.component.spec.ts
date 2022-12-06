import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactnavComponent } from './contactnav.component';

describe('ContactnavComponent', () => {
  let component: ContactnavComponent;
  let fixture: ComponentFixture<ContactnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
