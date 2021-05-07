import { NgModule } from '@angular/core';
import { StacktraceRoutingModule } from './stacktrace-routing.module';
import { SharedModule } from '../global-components/shared.module';



@NgModule({
  declarations: [/**components go here*/],
  imports: [
    SharedModule,
    StacktraceRoutingModule
  ]
})
export class StacktraceModule { }
