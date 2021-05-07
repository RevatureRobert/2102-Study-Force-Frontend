import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from "./base-page/base-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VoteComponent } from './vote/vote.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from '../home-component/home/home.component';
import { DiologueCardComponent } from './diologue-card/diologue-card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FlashcardAnswerComponent } from './flashcard-answer/flashcard-answer.component';
import { FlashcardQuestionComponent } from './flashcard-question/flashcard-question.component';
import { GenericCardWideComponent } from './generic-card-wide/generic-card-wide.component';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { GlassPaneComponent } from './glass-pane/glass-pane.component';
import { ListComponent } from './list/list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ReplyCardComponent } from './reply-card/reply-card.component';
import { SubmitContentCardComponent } from './submit-content-card/submit-content-card.component';



@NgModule({
  declarations: [
    BasePageComponent,
    DiologueCardComponent,
    DropdownComponent,
    FlashcardAnswerComponent,
    FlashcardQuestionComponent,
    GenericCardComponent,
    HomeComponent,
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
    CommonModule
  ],
  exports: [
    BasePageComponent,
    DiologueCardComponent,
    DropdownComponent,
    FlashcardAnswerComponent,
    FlashcardQuestionComponent,
    GenericCardComponent,
    HomeComponent,
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
