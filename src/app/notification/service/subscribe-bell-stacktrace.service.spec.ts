import { TestBed } from '@angular/core/testing';

import { SubscribeBellStacktraceService } from './subscribe-bell-stacktrace.service';

describe('SubscribeBellStacktraceService', () => {
  let service: SubscribeBellStacktraceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeBellStacktraceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
