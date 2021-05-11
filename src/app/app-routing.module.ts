import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home-component/home/home.component';

const routes: Routes = [
  {
    path: 'notifications',
    loadChildren: () =>
      import('src/app/notification/notification.module').then(m => m.NotificationModule)
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
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
