import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardComponent } from './flashcard.component';
import { FlashcardPageComponent } from './components/pages/flashcard-page/flashcard-page.component';
import { FlashcardQuestionComponent } from './components/ui/flashcard-question/flashcard-question.component';
import { FlashcardAnswerComponent } from './components/ui/flashcard-answer/flashcard-answer.component';
import { FlashcardRoutingModule } from './flashcard-routing.module';
import { CreateFlashcardPageComponent } from './components/pages/create-flashcard-page/create-flashcard-page.component'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [FlashcardComponent, FlashcardPageComponent, FlashcardQuestionComponent, FlashcardAnswerComponent, CreateFlashcardPageComponent],
  imports: [
    CommonModule, FlashcardRoutingModule,
    FormsModule
  ],
  exports: [
    FlashcardComponent,
    FlashcardPageComponent,
    CreateFlashcardPageComponent
  ]
})
export class FlashcardModule {  }
