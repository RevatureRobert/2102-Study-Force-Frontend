import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/flashcard/model/answer';
import { AnswerPageable } from 'src/app/flashcard/model/answer-pageable';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import * as EventEmitter from 'events';
import { FlashcardService } from 'src/app/flashcard/service/flashcard.service';

@Component({
  selector: 'app-flashcard-answer',
  templateUrl: './flashcard-answer.component.html',
  styleUrls: ['./flashcard-answer.component.css']
})
export class FlashcardAnswerComponent implements OnInit {
  @Input() flashcardId: any;
  @Input() difficulty: any;
  @Input() userId!: number;
  @Output() click = new EventEmitter();
  answers!: Answer[];
  isAnswer = !!this.answers;

  subscribed = false;
  flip = false;

  newAnswerIcon = "../../../assets/add new answer.png"

  constructor(private flashcardService: FlashcardService, private router: Router) {

  }

  ngOnInit(): void {

    switch (this.difficulty) {
      case 0:
          this.difficulty = "Easy";
        break;
      case 1:
          this.difficulty = "Medium";
        break;
      case 2:
          this.difficulty = "Hard";
        break;
      default:
        break;
    }

    let temp = this.flashcardId;

    this.flashcardService.getAnswers(temp).subscribe(
      (response: AnswerPageable) => {
      this.answers = response.content;

      this.isAnswer = !!this.answers[0];
    });
  }

  // On new answer, the router should route the user to a create an answer page.
  newAnswer(event: Event) {
    event.stopPropagation();
  }

  toggleView(event: Event): void {
    this.flip = !this.flip;
    event.stopPropagation();
  }

  vote(event: Event) {
    event.stopPropagation();
  }

  deleteFlashcard(event: Event) {

    event.stopPropagation();
  }
}
