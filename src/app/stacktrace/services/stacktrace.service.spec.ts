import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StacktraceService } from './stacktrace.service';

describe('StacktraceService', () => {
  let injector: TestBed;
  let service: StacktraceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StacktraceService]
    });
    injector = getTestBed();
    service = injector.inject(StacktraceService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllStacktrace should return value from a promise',
    (done: DoneFn) => {
    service.getAllStacktrace().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });
});
