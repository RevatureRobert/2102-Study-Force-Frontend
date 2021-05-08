import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { StacktraceRoutingModule } from './stacktrace-routing.module';

import { StacktraceService } from './services/stacktrace.service'
import {StacktraceHomeComponent} from 'src/app/stacktrace/components/stacktrace-home/stacktrace-home.component';
import {NewStacktraceComponent} from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';
import {StacktraceComponent} from 'src/app/stacktrace/components/stacktrace/stacktrace.component';
import { NewTechnologyComponent } from './components/new-technology/new-technology.component';


@NgModule({
  declarations: [
    StacktraceComponent,
    NewStacktraceComponent,
    StacktraceHomeComponent,
    NewTechnologyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    StacktraceRoutingModule,
    FormsModule,
    NgxPaginationModule

  ],
  exports:[

  ],
  providers:[
    StacktraceService
  ]
})
export class StacktraceModule { }
