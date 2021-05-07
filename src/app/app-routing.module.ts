import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/components/login/login.component';
import { HomeComponent } from './home-component/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'flashcards',
  //   loadChildren: () =>
  //     import('./flashcard/flashcard.module').then(m => m.FlashcardModule)
  // },
  // {
  //   path: 'stacktrace',
  //     loadChildren: () =>
  //       import('./stacktrace/stacktrace.module').then(m => m.StacktraceModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  navigate(arg0: string[], arg1: { relativeTo: import("@angular/router").ActivatedRoute; }) {
    throw new Error('Method not implemented.');
  }
}
