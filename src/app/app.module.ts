import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './global-components/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import {FlashcardModule } from './flashcard/flashcard.module';
import { FormsModule } from '@angular/forms';
import { StacktraceModule } from './stacktrace/stacktrace.module';
import { UserModule } from './user/user.module';

=======
import { FlashcardModule } from './flashcard/flashcard.module';
import { StacktraceModule } from './stacktrace/stacktrace.module';
import { UserModule } from './user/user.module'
>>>>>>> 64be4cd3bd36ffe82403bee85dc7b9a6f5dee6e1


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    NgbModule,
    SharedModule,
    FlashcardModule,
    StacktraceModule,
=======
    NgbModule,
    FlashcardModule,
    StacktraceModule
>>>>>>> 64be4cd3bd36ffe82403bee85dc7b9a6f5dee6e1
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
