import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardQuestionComponent } from './flashcard-question.component';

describe('FlashcardComponent', () => {
  let component: FlashcardQuestionComponent;
  let fixture: ComponentFixture<FlashcardQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
