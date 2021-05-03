import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StacktraceHomeComponent } from './components/stacktrace-home/stacktrace-home.component';

const routes: Routes = [
  {
    path: '', component: StacktraceHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StacktraceRoutingModule { }
