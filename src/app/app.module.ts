import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StacktraceListComponent } from 'src/app/stacktrace/components/stacktrace-list/stacktrace-list.component';
import {NewStacktraceComponent} from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';
import {StacktraceService} from 'src/app/stacktrace/services/stacktrace.service';


@NgModule({
  declarations: [
    AppComponent,
    StacktraceListComponent,
    NewStacktraceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StacktraceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
