import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFlashcardPageComponent } from './components/pages/create-flashcard-page/create-flashcard-page.component';
import { FlashcardPageComponent } from './components/pages/flashcard-page/flashcard-page.component';
import { SubmitAnswerPageComponent } from './components/pages/submit-answer-page/submit-answer-page.component';
import { ViewFlashcardThreadComponent } from './components/pages/view-flashcard-thread/view-flashcard-thread.component';
import { FlashcardTopicComponent } from './components/ui/flashcard/flashcard-topic/flashcard-topic.component';


const routes: Routes = [
  { path: '', redirectTo: '/view-flashcards', pathMatch: 'full'},
  { path: 'create-question', component: CreateFlashcardPageComponent },
  { path: 'submit-answer', component: SubmitAnswerPageComponent },
  { path: 'view-thread', component: ViewFlashcardThreadComponent},
  { path: 'view-flashcards', component: FlashcardPageComponent},
  { path: 'view-topics', component: FlashcardTopicComponent} //require admin auth guard, please add in the future
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FlashcardRoutingModule { }
