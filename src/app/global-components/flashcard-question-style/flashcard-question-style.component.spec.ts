import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardQuestionStyleComponent } from './flashcard-question-style.component';

describe('FlashcardComponent', () => {
  let component: FlashcardQuestionStyleComponent;
  let fixture: ComponentFixture<FlashcardQuestionStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardQuestionStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardQuestionStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
