import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StacktraceHomeComponent} from 'src/app/stacktrace/components/stacktrace-home/stacktrace-home.component';
import {NewStacktraceComponent} from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';
import {NewTechnologyComponent} from 'src/app/stacktrace/components/new-technology/new-technology.component';
import {StacktraceComponent} from 'src/app/stacktrace/components/stacktrace/stacktrace.component';
import { StackGuardGuard } from './services/stack-guard.guard';

const routes: Routes = [

  { path: 'stacktraces', component: StacktraceHomeComponent },
  { path: 'stacktraces/addstacktrace', component: NewStacktraceComponent },
  { path: 'stacktraces/:stacktraceId', component: StacktraceComponent },
  { path: 'technology', component: NewTechnologyComponent, canActivate : [StackGuardGuard] }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StacktraceRoutingModule { }
