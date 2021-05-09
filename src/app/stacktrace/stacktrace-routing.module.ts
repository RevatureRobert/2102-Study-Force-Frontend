import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StacktraceHomeComponent} from 'src/app/stacktrace/components/stacktrace-home/stacktrace-home.component';
import {NewStacktraceComponent} from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';
import {NewTechnologyComponent} from 'src/app/stacktrace/components/new-technology/new-technology.component';
import {StacktraceComponent} from 'src/app/stacktrace/components/stacktrace/stacktrace.component';

const routes: Routes = [

  { path: 'stacktrace', component: StacktraceHomeComponent },
  { path: 'stacktrace/addstacktrace', component: NewStacktraceComponent },
  { path: 'stacktrace/:stacktraceId', component: StacktraceComponent },
  { path: 'stacktrace/technology', component: NewTechnologyComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StacktraceRoutingModule { }
