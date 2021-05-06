import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardComponent } from './components/ui/flashcard/flashcard.component';
import { FlashcardPageComponent } from './components/pages/flashcard-page/flashcard-page.component';
import { FlashcardQuestionComponent } from './components/ui/flashcard/flashcard-question/flashcard-question.component';
import { FlashcardAnswerComponent } from './components/ui/flashcard/flashcard-answer/flashcard-answer.component';
import { FlashcardRoutingModule } from './flashcard-routing.module';
import { CreateFlashcardPageComponent } from './components/pages/create-flashcard-page/create-flashcard-page.component';
import { FormsModule } from '@angular/forms';
import {FlashcardService} from './service/flashcard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashcardTopicComponent } from './components/ui/flashcard/flashcard-topic/flashcard-topic.component';

@NgModule({
  declarations: [FlashcardComponent,
    FlashcardQuestionComponent, FlashcardAnswerComponent,
    CreateFlashcardPageComponent, FlashcardPageComponent, FlashcardTopicComponent
  ],
  imports: [
    CommonModule, FlashcardRoutingModule,
    FormsModule, NgbModule
  ],
  exports: [
    FlashcardComponent,
    FlashcardPageComponent,
    CreateFlashcardPageComponent,
    FlashcardQuestionComponent
  ],
  providers: [FlashcardService]
})
export class FlashcardModule {  }
