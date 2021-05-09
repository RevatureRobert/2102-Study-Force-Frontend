import { TestBed } from '@angular/core/testing';
import { BatchService } from './batch.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Batch.ServiceService', () => {
  let service: BatchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BatchService],
    });
    service = TestBed.inject(BatchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();

  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
