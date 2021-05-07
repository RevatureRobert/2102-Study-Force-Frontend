import { NgModule } from '@angular/core';
import { StacktraceRoutingModule } from './stacktrace-routing.module';
import { SharedModule } from '../global-components/shared.module';
import { StacktraceHomeComponent } from './components/stacktrace-home/stacktrace-home.component';



@NgModule({
  declarations: [StacktraceHomeComponent],
  imports: [
    SharedModule,
    StacktraceRoutingModule
  ]
})
export class StacktraceModule { }
