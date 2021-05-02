import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/flashcard/model/Answer';
import { Flashcard } from 'src/app/flashcard/model/flashcard';

@Component({
  selector: 'app-flashcard-answer',
  templateUrl: './flashcard-answer.component.html',
  styleUrls: ['./flashcard-answer.component.css']
})
export class FlashcardAnswerComponent implements OnInit {
  @Input() flashcard!: Flashcard;
  @Input() answer!: Answer;

  constructor() { }

  ngOnInit(): void {
  }

}
