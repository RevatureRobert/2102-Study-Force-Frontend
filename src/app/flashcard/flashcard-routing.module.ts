import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardPageComponent } from './components/pages/flashcard-page/flashcard-page.component';
import { CreateFlashcardComponent } from './components/util/flashcard-util/create-flashcard.component';

const routes: Routes = [
  { path: '', component: FlashcardPageComponent },
  { path: 'create', component: CreateFlashcardComponent }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FlashcardRoutingModule { }
