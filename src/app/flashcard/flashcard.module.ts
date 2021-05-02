import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardComponent } from './flashcard.component';
import { FlashcardPageComponent } from './components/pages/flashcard-page/flashcard-page.component';
import { FlashcardQuestionComponent } from './components/ui/flashcard-question/flashcard-question.component';
import { FlashcardAnswerComponent } from './components/ui/flashcard-answer/flashcard-answer.component';



@NgModule({
  declarations: [FlashcardComponent, FlashcardPageComponent, FlashcardQuestionComponent, FlashcardAnswerComponent],
  imports: [
    CommonModule
  ]
})
export class FlashcardModule { }
