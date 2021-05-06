import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/flashcard/model/answer';
import { AnswerPageable } from 'src/app/flashcard/model/answer-pageable';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardService } from 'src/app/flashcard/service/flashcard.service';

@Component({
  selector: 'app-flashcard-answer',
  templateUrl: './flashcard-answer.component.html',
  styleUrls: ['./flashcard-answer.component.css']
})
export class FlashcardAnswerComponent implements OnInit {
  @Input() flashcardId!: number;
  answers!: Answer[];
  isAnswer = !!this.answers;

  subscribed = false;

  newAnswerIcon = "../../../assets/add new answer.png"

  constructor(private flashcardService: FlashcardService, private router: Router) {

  }

  ngOnInit(): void {
    let temp = this.flashcardId;

    this.flashcardService.getAnswers(temp).subscribe(
      (response: AnswerPageable) => {
      this.answers = response.content;
      console.log("CONTENT: " + response.content[0]);

      this.isAnswer = !!this.answers[0];
    });
  }

  // On new answer, the router should route the user to a create an answer page.
  newAnswer() {

  }
}
