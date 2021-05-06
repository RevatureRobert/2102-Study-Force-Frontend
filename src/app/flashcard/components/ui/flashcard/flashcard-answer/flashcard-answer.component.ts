import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/flashcard/model/answer';
import { Flashcard } from 'src/app/flashcard/model/flashcard';

@Component({
  selector: 'app-flashcard-answer',
  templateUrl: './flashcard-answer.component.html',
  styleUrls: ['./flashcard-answer.component.css']
})
export class FlashcardAnswerComponent implements OnInit {
  @Input() flashcard!: Flashcard;
  @Input() answer!: Answer;
  isAnswer = !!this.answer;

  subscribed = false;

  newAnswerIcon = "../../../assets/add new answer.png"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // On new answer, the router should route the user to a create an answer page.
  newAnswer() {

  }
}
