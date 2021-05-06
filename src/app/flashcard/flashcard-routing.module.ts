import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFlashcardPageComponent } from './components/pages/create-flashcard-page/create-flashcard-page.component';
import { FlashcardPageComponent } from './components/pages/flashcard-page/flashcard-page.component';
import { SubmitAnswerPageComponent } from './components/pages/submit-answer-page/submit-answer-page.component';
import { ViewFlashcardThreadComponent } from './components/pages/view-flashcard-thread/view-flashcard-thread.component';
import { FlashcardAnswerComponent } from './components/ui/flashcard/flashcard-answer/flashcard-answer.component';


const routes: Routes = [
  { path: 'welcome', component: FlashcardPageComponent },
  { path: 'create', component: CreateFlashcardPageComponent },
  { path: 'submit-answer', component: SubmitAnswerPageComponent },
  { path: 'thread', component: ViewFlashcardThreadComponent},
  { path: 'answer', component: FlashcardAnswerComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FlashcardRoutingModule {
   navigate(arg0: string[], arg1: { relativeTo: import("@angular/router").ActivatedRoute; }) {
     throw new Error('Method not implemented.');
   }
}
