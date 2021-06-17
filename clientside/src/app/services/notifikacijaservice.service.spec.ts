import { TestBed } from '@angular/core/testing';

import { NotifikacijaserviceService } from './notifikacijaservice.service';

describe('NotifikacijaserviceService', () => {
  let service: NotifikacijaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifikacijaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
