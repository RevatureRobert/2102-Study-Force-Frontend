import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StacktraceHomeComponent } from './components/stacktrace-home/stacktrace-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [StacktraceHomeComponent],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [
    StacktraceHomeComponent
  ]
})
export class StacktraceModule { }
