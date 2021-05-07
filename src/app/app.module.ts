import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StacktraceListComponent } from 'src/app/stacktrace/components/stacktrace-list/stacktrace-list.component';
import {NewStacktraceComponent} from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';
import {StacktraceService} from 'src/app/stacktrace/services/stacktrace.service';
import {ViewClickedStacktraceComponent} from 'src/app/stacktrace/components/view-clicked-stacktrace/view-clicked-stacktrace.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    StacktraceListComponent,
    NewStacktraceComponent,
    ViewClickedStacktraceComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [StacktraceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
