import { TestBed } from '@angular/core/testing';

import { NonregisteredGuard } from './nonregistered.guard';

describe('NonregisteredGuard', () => {
  let guard: NonregisteredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonregisteredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
