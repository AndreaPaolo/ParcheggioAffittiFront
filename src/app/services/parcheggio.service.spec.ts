import { TestBed } from '@angular/core/testing';

import { ParcheggioService } from './parcheggio.service';

describe('ParcheggioService', () => {
  let service: ParcheggioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcheggioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
