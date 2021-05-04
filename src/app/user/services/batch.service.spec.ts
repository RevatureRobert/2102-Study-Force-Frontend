import { TestBed } from '@angular/core/testing';
import { BatchService } from './batch.service';

describe('Batch.ServiceService', () => {
  let service: BatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
