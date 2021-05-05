import { Component, OnInit } from '@angular/core';
import {FlashcardQuestionComponent} from './flashcard-question/flashcard-question.component';
import {FlashcardAnswerComponent} from './flashcard-answer/flashcard-answer.component';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  question: string = 'question body';
  answer?: string;

  constructor(public questionComponent: FlashcardQuestionComponent,
              public answerComponent: FlashcardAnswerComponent) {}

  flip = false;

  ngOnInit(): void {

  }

  toggleView(): void {
    this.flip = !this.flip;
  }
}
