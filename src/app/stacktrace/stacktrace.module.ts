import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StacktraceHomeComponent } from './components/stacktrace-home/stacktrace-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [StacktraceHomeComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class StacktraceModule { }
