import { Component, Input, OnInit, Output } from '@angular/core';
import {FlashcardQuestionComponent} from './flashcard-question/flashcard-question.component';
import {FlashcardAnswerComponent} from './flashcard-answer/flashcard-answer.component';
import { Flashcard } from '../../../model/flashcard';
import * as EventEmitter from 'events';
import { Answer } from 'src/app/flashcard/model/answer';
import { User } from 'src/app/user/models/user';


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
  bellStyle = '../../../assets/bell.svg';

  userId!:number;

  public deleteId?: number;

  public question = 'question body';


  public realAnswer?: Answer;

  constructor() {}

  flip = false;

  ngOnInit(): void {
    let u:User = JSON.parse(localStorage.getItem('loggedInUser')!);

    this.userId = u.userId;
    if (this.flashcard){
      this.question = this.flashcard.question;
      this.deleteId = this.flashcard.flashcardId;
    }

  }

  // Flips between question and answer views
  toggleView(): void {
    this.flip = !this.flip;
  }

  // Subscribes user to Flashcard
  subscribe(event: Event) {
    this.subscribed = !this.subscribed;

    if (this.subscribed) {
      this.bellStyle = '../../../assets/bell fill.svg';
    }
    else {
      this.bellStyle = '../../../assets/bell.svg';
    }

    event.stopPropagation();

  }
}
