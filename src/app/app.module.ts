import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashcardModule } from './flashcard/flashcard.module';
import { HttpClientModule  } from '@angular/common/http';
import { FlashcardGridComponent } from './flashcard-grid/flashcard-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlashcardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
