import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AnswerService } from './answer.service';

describe('AnswerService', () => {
  let service: AnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        AnswerService
      ]
    });
    service = TestBed.inject(AnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
