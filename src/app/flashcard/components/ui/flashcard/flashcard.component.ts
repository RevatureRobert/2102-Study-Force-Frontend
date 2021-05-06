import { Component, Input, OnInit } from '@angular/core';
import {FlashcardQuestionComponent} from './flashcard-question/flashcard-question.component';
import {FlashcardAnswerComponent} from './flashcard-answer/flashcard-answer.component';
import { Flashcard } from 'src/app/flashcard/model/flashcard';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  @Input() flashcard?: Flashcard;

  public question: string = 'question body';
  answer?: string;

  constructor() {}

  flip = false;

  ngOnInit(): void {
    if(this.flashcard){
      this.question = this.flashcard.question;
    }
  }

  toggleView(): void {
    this.flip = !this.flip;
  }
}
