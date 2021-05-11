import { TestBed } from '@angular/core/testing';

import { StackGuardGuard } from './stack-guard.guard';

describe('StackGuardGuard', () => {
  let guard: StackGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StackGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
