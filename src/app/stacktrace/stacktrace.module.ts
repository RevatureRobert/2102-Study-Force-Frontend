import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StacktraceHomeComponent } from './components/stacktrace-home/stacktrace-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StacktraceComponent } from './components/stacktrace/stacktrace.component';
import { StacktraceRoutingModule } from './stacktrace-routing.module';
import { SharedModule } from '../global-components/shared.module';

import { StacktraceService } from './services/stacktrace.service'

@NgModule({
  declarations: [
    StacktraceHomeComponent,
    StacktraceComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    StacktraceRoutingModule
  ],
  exports: [
    StacktraceHomeComponent,
    StacktraceComponent
  ],
  providers: [
    StacktraceService

  ]
})
export class StacktraceModule { }
