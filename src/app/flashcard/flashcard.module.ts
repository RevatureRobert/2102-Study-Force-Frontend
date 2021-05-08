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
import { SubmitAnswerPageComponent } from './components/pages/submit-answer-page/submit-answer-page.component';
import { ViewFlashcardThreadComponent } from './components/pages/view-flashcard-thread/view-flashcard-thread.component';
import { SharedModule } from '../shared.module';
import { VoteService } from './service/vote.service';
import { RateService } from './service/rate.service';



@NgModule({
  declarations: [
    FlashcardComponent,
    FlashcardQuestionComponent,
    FlashcardAnswerComponent,
    CreateFlashcardPageComponent,
    FlashcardPageComponent,
    FlashcardGridComponent,
    FlashcardDeleteComponent,
    SubmitAnswerPageComponent,
    ViewFlashcardThreadComponent
  ],
  imports: [
    CommonModule,
    FlashcardRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    FlashcardComponent,
    FlashcardPageComponent,
    CreateFlashcardPageComponent,
    FlashcardQuestionComponent,
    FlashcardAnswerComponent,
    FlashcardGridComponent,
    FlashcardDeleteComponent,
    SubmitAnswerPageComponent,
    ViewFlashcardThreadComponent
  ],
  providers: [
    FlashcardService,
    VoteService,
    RateService
  ]
})
export class FlashcardModule {  }
