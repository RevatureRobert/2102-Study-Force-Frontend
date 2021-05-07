import { TestBed } from '@angular/core/testing';

import { RedirectGuardService } from './redirect-guard.service';

describe('RedirectGuardService', () => {
  let service: RedirectGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
