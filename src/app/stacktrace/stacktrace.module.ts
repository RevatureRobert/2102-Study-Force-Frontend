import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StacktraceHomeComponent } from './components/stacktrace-home/stacktrace-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StacktraceRoutingModule } from './stacktrace-routing.module';



@NgModule({
  declarations: [StacktraceHomeComponent],
  imports: [
    CommonModule,
    NgbModule,
    StacktraceRoutingModule
  ],
  exports: [
    StacktraceHomeComponent
  ]
})
export class StacktraceModule { }
