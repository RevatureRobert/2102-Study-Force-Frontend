import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FlashcardService } from './flashcard.service';

describe('FlashcardService', () => {
  let service: FlashcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FlashcardService],
    });
    service = TestBed.inject(FlashcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAll should return all Flashcards', (done: DoneFn) => {
    service.getAll().subscribe((value) => {
      expect(value).toBeTruthy();
      done();
    });
  });

  it('#getAllByPage should return all Flashcards by page', (done: DoneFn) => {
    service.getAllByPage(1).subscribe((value) => {
      expect(value).toBeTruthy();
      done();
    });
  });

  it('#getAllByResolved should return all Flashcards by resolved', (done: DoneFn) => {
    service.getAllByResolved(1, false).subscribe((value) => {
      expect(value).toBeTruthy();
      done();
    });
  });
});
