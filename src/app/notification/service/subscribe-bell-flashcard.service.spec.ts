import { TestBed } from '@angular/core/testing';

import { SubscribeBellFlashcardService } from './subscribe-bell-flashcard.service';

describe('SubscribeBellFlashcardService', () => {
  let service: SubscribeBellFlashcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeBellFlashcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
