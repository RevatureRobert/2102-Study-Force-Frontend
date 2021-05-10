import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VoteService } from './vote.service';

describe('VoteService', () => {
  let service: VoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        VoteService
      ]
    });
    service = TestBed.inject(VoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
