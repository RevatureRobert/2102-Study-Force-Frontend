import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './global-components/button/button.component';
import { TableComponent } from './global-components/table/table.component';
import { NavbarComponent } from './global-components/navbar/navbar.component';
import { FlashcardComponent } from './global-components/flashcard/flashcard.component';
import { ReplyCardComponent } from './global-components/reply-card/reply-card.component';
import { VoteComponent } from './global-components/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TableComponent,
    NavbarComponent,
    FlashcardComponent,
    ReplyCardComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
