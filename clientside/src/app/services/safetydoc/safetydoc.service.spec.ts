import { TestBed } from '@angular/core/testing';

import { SafetydocService } from './safetydoc.service';

describe('SafetydocService', () => {
  let service: SafetydocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafetydocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
