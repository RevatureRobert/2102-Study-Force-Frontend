import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './global-components/base-page/base-page.component';
import { NavbarComponent } from './global-components/navbar/navbar.component';
import { SearchBarComponent } from './global-components/search-bar/search-bar.component';
import { VoteComponent } from './global-components/vote/vote.component';
import { TableComponent } from './global-components/table/table.component';
import { DiologueCardComponent } from './global-components/diologue-card/diologue-card.component';
import { DropdownComponent } from './global-components/dropdown/dropdown.component';
import { FlashcardAnswerStyleComponent } from './global-components/flashcard-answer-style/flashcard-answer-style.component';
import { FlashcardQuestionStyleComponent } from './global-components/flashcard-question-style/flashcard-question-style.component';
import { GenericCardWideComponent } from './global-components/generic-card-wide/generic-card-wide.component';
import { GenericCardComponent } from './global-components/generic-card/generic-card.component';
import { GlassPaneComponent } from './global-components/glass-pane/glass-pane.component';
import { ListComponent } from './global-components/list/list.component';
import { PaginationComponent } from './global-components/pagination/pagination.component';
import { ReplyCardComponent } from './global-components/reply-card/reply-card.component';
import { SubmitContentCardComponent } from './global-components/submit-content-card/submit-content-card.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    BasePageComponent,
    DiologueCardComponent,
    DropdownComponent,
    FlashcardAnswerStyleComponent,
    FlashcardQuestionStyleComponent,
    GenericCardComponent,
    GenericCardWideComponent,
    GlassPaneComponent,
    ListComponent,
    NavbarComponent,
    PaginationComponent,
    ReplyCardComponent,
    SearchBarComponent,
    SubmitContentCardComponent,
    TableComponent,
    VoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    BasePageComponent,
    DiologueCardComponent,
    DropdownComponent,
    GenericCardComponent,
    GenericCardWideComponent,
    GlassPaneComponent,
    ListComponent,
    NavbarComponent,
    PaginationComponent,
    ReplyCardComponent,
    SearchBarComponent,
    SubmitContentCardComponent,
    TableComponent,
    VoteComponent
  ]
})
export class SharedModule { }

