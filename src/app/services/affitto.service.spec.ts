import { TestBed } from '@angular/core/testing';

import { AffittoService } from './affitto.service';

describe('AffittoService', () => {
  let service: AffittoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffittoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
