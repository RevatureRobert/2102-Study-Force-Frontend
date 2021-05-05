import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-question',
  templateUrl: './flashcard-question.component.html',
  styleUrls: ['./flashcard-question.component.css']
})
export class FlashcardQuestionComponent implements OnInit {

  @Input() question!: string;

  constructor() {}

  ngOnInit(): void {}

}
