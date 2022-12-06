import { TestBed } from '@angular/core/testing';

import { ArrendatarioGuard } from './arrendatario.guard';

describe('ArrendatarioGuard', () => {
  let guard: ArrendatarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ArrendatarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
