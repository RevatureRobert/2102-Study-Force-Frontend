import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/components/login/login.component';
import { HomeComponent } from './home-component/home/home.component';

const routes: Routes = [
  {
    path: 'notifications',
    loadChildren: () =>
      import('./notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'flashcards',
    loadChildren: () =>
      import('./flashcard/flashcard.module').then((m) => m.FlashcardModule),
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
