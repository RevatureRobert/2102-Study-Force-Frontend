import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardAnswerStyleComponent } from './flashcard-answer-style.component';

describe('FlashcardAnswerComponent', () => {
  let component: FlashcardAnswerStyleComponent;
  let fixture: ComponentFixture<FlashcardAnswerStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardAnswerStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardAnswerStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
