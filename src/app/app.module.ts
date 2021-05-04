import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlashcardModule } from './flashcard/flashcard.module';

import { FormsModule } from '@angular/forms';

import { StacktraceModule } from './stacktrace/stacktrace.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FlashcardModule,
    FormsModule,
    StacktraceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
