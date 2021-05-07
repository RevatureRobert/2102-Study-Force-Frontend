import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './global-components/table/table.component';
import { FlashcardQuestionComponent } from './global-components/flashcard-question/flashcard-question.component';
import { ReplyCardComponent } from './global-components/reply-card/reply-card.component';
import { VoteComponent } from './global-components/vote/vote.component';
import { SubmitContentCardComponent } from './global-components/submit-content-card/submit-content-card.component';
import { FlashcardAnswerComponent } from './global-components/flashcard-answer/flashcard-answer.component';
import { GlassPaneComponent } from './global-components/glass-pane/glass-pane.component';
import { GenericCardWideComponent } from './global-components/generic-card-wide/generic-card-wide.component';
import { GenericCardComponent } from './global-components/generic-card/generic-card.component';
import { DropdownComponent } from './global-components/dropdown/dropdown.component';
import { PaginationComponent } from './global-components/pagination/pagination.component';
import { DiologueCardComponent } from './global-components/diologue-card/diologue-card.component';
import { HomeComponent } from './home-component/home/home.component';
import { ListComponent } from './global-components/list/list.component';

import { FlashcardModule } from './flashcard/flashcard.module';
import { FormsModule } from '@angular/forms';
import { StacktraceModule } from './stacktrace/stacktrace.module';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FlashcardQuestionComponent,
    ReplyCardComponent,
    VoteComponent,
    SubmitContentCardComponent,
    FlashcardAnswerComponent,
    GlassPaneComponent,
    GenericCardWideComponent,
    GenericCardComponent,
    DropdownComponent,
    PaginationComponent,
    DiologueCardComponent,
    HomeComponent,
    ListComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FlashcardModule,
    FormsModule,
    StacktraceModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
