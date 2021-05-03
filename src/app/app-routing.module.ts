import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flashcards',
    loadChildren: () =>
      import('./flashcard/flashcard.module').then(m => m.FlashcardModule)
  },
  {
    path: 'stacktrace',
      loadChildren: () =>
        import('./stacktrace/stacktrace.module').then(m => m.StacktraceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
