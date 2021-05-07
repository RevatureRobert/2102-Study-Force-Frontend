import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StacktraceListComponent} from 'src/app/stacktrace/components/stacktrace-list/stacktrace-list.component';
import {NewStacktraceComponent} from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';
import {ViewClickedStacktraceComponent} from 'src/app/stacktrace/components/view-clicked-stacktrace/view-clicked-stacktrace.component';

const routes: Routes = [
  { path: 'stacktrace', component: StacktraceListComponent },
  { path: 'addstacktrace', component: NewStacktraceComponent },
  { path: 'stacktrace/:stacktraceId', component: ViewClickedStacktraceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
