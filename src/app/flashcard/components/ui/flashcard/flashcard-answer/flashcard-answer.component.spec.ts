import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardAnswerComponent } from './flashcard-answer.component';

describe('FlashcardAnswerComponent', () => {
  let component: FlashcardAnswerComponent;
  let fixture: ComponentFixture<FlashcardAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
