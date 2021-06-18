import { TestBed } from '@angular/core/testing';

import { PotrosacService } from './potrosac.service';

describe('PotrosacService', () => {
  let service: PotrosacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotrosacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
