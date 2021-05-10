import { TestBed } from '@angular/core/testing';

import { StacktraceService } from './stacktrace.service';

describe('StacktraceService', () => {
  let service: StacktraceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StacktraceService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
