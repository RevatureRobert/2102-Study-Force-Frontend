import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StacktraceHomeComponent } from './components/stacktrace-home/stacktrace-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ViewClickedStacktraceComponent } from './components/view-clicked-stacktrace/view-clicked-stacktrace.component';

import { StacktraceService } from './services/stacktrace.service'


@NgModule({
  declarations: [
    StacktraceHomeComponent,
    ViewClickedStacktraceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    HttpClientModule
  ],
  exports:[
    StacktraceHomeComponent,
    ViewClickedStacktraceComponent
  ],
  providers:[
    StacktraceService
  ]
})
export class StacktraceModule { }
