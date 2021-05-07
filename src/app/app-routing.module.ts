import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home/home.component';
import { LoginComponent } from './user/components/login/login.component';

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
  },

  {
    path: 'home', component: HomeComponent},
  {
    path: '',redirectTo:'/home',pathMatch:'full'
  },
  {
    path: 'user',
      loadChildren: () =>
        import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
