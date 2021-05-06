import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardComponent } from './components/ui/flashcard/flashcard.component';
import { FlashcardPageComponent } from './components/pages/flashcard-page/flashcard-page.component';
import { FlashcardQuestionComponent } from './components/ui/flashcard/flashcard-question/flashcard-question.component';
import { FlashcardAnswerComponent } from './components/ui/flashcard/flashcard-answer/flashcard-answer.component';
import { FlashcardRoutingModule } from './flashcard-routing.module';
import { CreateFlashcardPageComponent } from './components/pages/create-flashcard-page/create-flashcard-page.component';
import { FormsModule } from '@angular/forms';
import { FlashcardService } from './service/flashcard.service';
import { FlashcardGridComponent } from './components/pages/flashcard-page/flashcard-grid/flashcard-grid.component';
import { FlashcardDeleteComponent } from './components/ui/flashcard/flashcard-delete/flashcard-delete.component';



@NgModule({
  declarations: [
    FlashcardComponent,
    FlashcardQuestionComponent,
    FlashcardAnswerComponent,
    CreateFlashcardPageComponent,
    FlashcardPageComponent,
    FlashcardGridComponent,
    FlashcardDeleteComponent
  ],
  imports: [
    CommonModule,
    FlashcardRoutingModule,
    FormsModule
  ],
  exports: [
    FlashcardComponent,
    FlashcardPageComponent,
    CreateFlashcardPageComponent,
    FlashcardQuestionComponent,
    FlashcardAnswerComponent,
    FlashcardGridComponent,
    FlashcardDeleteComponent
  ],
  providers: [FlashcardService]
})
export class FlashcardModule {  }
