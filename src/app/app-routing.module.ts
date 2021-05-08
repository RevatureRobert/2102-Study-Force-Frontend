import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StacktraceHomeComponent} from 'src/app/stacktrace/components/stacktrace-home/stacktrace-home.component';
import {NewStacktraceComponent} from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';
import {StacktraceComponent} from 'src/app/stacktrace/components/stacktrace/stacktrace.component';
const routes: Routes = [
 /* {
    path: 'flashcards',
    loadChildren: () =>
      import('./flashcard/flashcard.module').then(m => m.FlashcardModule)
  },
  {
    path: 'stacktrace',
      loadChildren: () =>
        import('./stacktrace/stacktrace.module').then(m => m.StacktraceModule)
  },
  {
    path: 'user',
      loadChildren: () =>
        import('./user/user.module').then(m => m.UserModule)
  },*/
  { path: 'stacktrace', component: StacktraceHomeComponent },
  { path: 'addstacktrace', component: NewStacktraceComponent },
  { path: 'stacktrace/:stacktraceId', component: StacktraceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
