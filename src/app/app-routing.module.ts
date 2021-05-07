import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StacktraceListComponent} from 'src/app/stacktrace/components/stacktrace-list/stacktrace-list.component';
import {NewStacktraceComponent} from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';


const routes: Routes = [
  { path: 'stacktrace', component: StacktraceListComponent },
  { path: 'addstacktrace', component: NewStacktraceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
