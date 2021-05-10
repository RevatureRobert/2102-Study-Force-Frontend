import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardDeleteComponent } from '../flashcard-delete/flashcard-delete.component';
import { FlashcardComponent } from '../flashcard.component';

import { FlashcardQuestionComponent } from './flashcard-question.component';

describe('FlashcardQuestionComponent', () => {
  let component: FlashcardQuestionComponent;
  let fixture: ComponentFixture<FlashcardQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardQuestionComponent, FlashcardDeleteComponent ]
      // imports: [ HttpClientModule ],
      // providers: [ FlashcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
