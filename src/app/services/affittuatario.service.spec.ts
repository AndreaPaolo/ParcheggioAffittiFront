import { TestBed } from '@angular/core/testing';

import { AffittuatarioService } from './affittuatario.service';

describe('AffittuatarioService', () => {
  let service: AffittuatarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffittuatarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
