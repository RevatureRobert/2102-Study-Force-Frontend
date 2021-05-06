import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';

@Component({
  selector: 'app-flashcard-question',
  templateUrl: './flashcard-question.component.html',
  styleUrls: ['./flashcard-question.component.css']
})
export class FlashcardQuestionComponent implements OnInit {

  @Input() flashcard?: Flashcard

  constructor() {}

  ngOnInit(): void {}

}
