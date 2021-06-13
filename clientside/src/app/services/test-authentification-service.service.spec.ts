import { TestBed } from '@angular/core/testing';

import { TestAuthentificationServiceService } from './test-authentification-service.service';

describe('TestAuthentificationServiceService', () => {
  let service: TestAuthentificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAuthentificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
