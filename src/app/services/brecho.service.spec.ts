import { TestBed } from '@angular/core/testing';

import { BrechoService } from './brecho.service';

describe('BrechoService', () => {
  let service: BrechoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrechoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
