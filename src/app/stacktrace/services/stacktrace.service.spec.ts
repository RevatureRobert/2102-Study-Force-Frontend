import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

//import { BASE_API_URL} from 'src/environments/environment';
import { StacktraceService } from './stacktrace.service';
import { Stacktrace } from '../models/stacktrace';

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

  it('getAllStacktrace should return value from a promise', () => {
    const dummyStacktraces: Stacktrace[] = [
      { title: 'John',
        body: 'Fron' },
      { title: 'Doe',
        body: 'Joe'}
    ];

    service.getAllStacktrace().then(value => {
      expect(value).toEqual(dummyStacktraces);
    });


    let apiServerUrl = "http://localhost:8080"; //BASE_API_URL;
    const req = httpMock.expectOne(`${service.apiServerUrl}/stacktrace`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyStacktraces);
  });
});
