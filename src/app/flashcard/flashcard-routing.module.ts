import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardPageComponent } from './components/pages/flashcard-page/flashcard-page.component';
import { FlashcardComponent } from './flashcard.component'


const routes: Routes = [
  { path: '', component: FlashcardComponent },
  { path: '/all', component: FlashcardPageComponent}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FlashcardRoutingModule { }
