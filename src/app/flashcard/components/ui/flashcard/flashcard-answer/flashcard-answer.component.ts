import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/flashcard/model/answer';
import { AnswerPageable } from 'src/app/flashcard/model/answer-pageable';
import * as EventEmitter from 'events';
import { FlashcardService } from 'src/app/flashcard/service/flashcard.service';
import { AnswerService } from 'src/app/flashcard/service/answer.service';

/**
 * This component displays when a Flashcard is flipped to the answer side.
 */
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

  newAnswerIcon = "/assets/addnewanswer.png"

  constructor(private flashcardService: FlashcardService, private answerService: AnswerService, private router: Router) {

  }

  ngOnInit(): void {

    // Converts numeric difficuulty to alphabetic difficulty
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

    // Sets answers according to flashcardId
    this.flashcardService.getAnswers(this.flashcardId).then(
      (response: AnswerPageable) => {
        this.answers = response.content;

        this.isAnswer = !!this.answers[0];
    });
  }

  // Creates a new Answer
  newAnswer(event: Event) {
    this.answerService.setCurrentFlashcardId(this.flashcardId);
    event.stopPropagation();
    this.router.navigate(['/submit-answer']);
  }

  // Flips between question and answer views
  toggleView(event: Event): void {
    this.flip = !this.flip;
    event.stopPropagation();
  }

  toViewThread(): void {
    this.flashcardService.setSelectedFlashcard(this.flashcardId);
    this.router.navigate(['/view-thread']);
  }

  // Just used to stop event propogation
  vote(event: Event) {
    event.stopPropagation();
  }

  markAsCorrect(event: Event): void {
    event.stopPropagation();
  }
}
