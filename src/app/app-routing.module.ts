import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStacktraceComponent } from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'new-stacktrace'},
  { path: 'new-stacktrace', component: NewStacktraceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
