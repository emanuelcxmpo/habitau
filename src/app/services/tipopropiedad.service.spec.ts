import { TestBed } from '@angular/core/testing';

import { TipopropiedadService } from './tipopropiedad.service';

describe('TipopropiedadService', () => {
  let service: TipopropiedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipopropiedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
