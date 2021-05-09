import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RateService } from './rate.service';

describe('RateService', () => {
  let service: RateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        RateService
      ]
    });
    service = TestBed.inject(RateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
