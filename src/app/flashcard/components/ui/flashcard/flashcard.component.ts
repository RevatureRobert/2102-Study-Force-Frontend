import { Component, Input, OnInit, Output } from '@angular/core';
import {FlashcardQuestionComponent} from './flashcard-question/flashcard-question.component';
import {FlashcardAnswerComponent} from './flashcard-answer/flashcard-answer.component';
import { Flashcard } from "../../../model/flashcard";
import * as EventEmitter from 'events';
import { Answer } from 'src/app/flashcard/model/answer';


/**
 * Main Flashcard display component. Flips between question side and answer side on click.
 */
@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  @Input() flashcard!: Flashcard;
  @Output() click = new EventEmitter();
  answer?: string;
  subscribed = false;
  bellStyle = "../../../assets/bell.svg";

  //TODO: GET CURRENT USER FROM STORAGE
  // userId: number = Number(localStorage("asocaite"));
  userId: number = 1;

  public deleteId?: number;

  public question: string = 'question body';

  public realAnswer?: Answer;

  constructor() {}

  ngOnInit(): void {

    if(this.flashcard){
      this.question = this.flashcard.question;
      this.deleteId = this.flashcard.flashcardId;
    }

  }

  flip = false;

  /**
   * Flips between question and answer views
   */
  toggleView(): void {
    this.flip = !this.flip;
  }

  /**
   * Subscribes user to Flashcard
   */
  subscribe(event: Event) {
    this.subscribed = !this.subscribed

    if(this.subscribed) {
      this.bellStyle="../../../assets/bell fill.svg";
    }
    else {
      this.bellStyle="../../../assets/bell.svg";
    }

    event.stopPropagation();

  }
}
