import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/flashcard/model/answer';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { AnswerService } from 'src/app/flashcard/service/answer.service';
import { FlashcardService } from 'src/app/flashcard/service/flashcard.service';
import { Subscription } from 'rxjs';
import { SearchContentService } from '../../../../global-components/search-content.service';

@Component({
  selector: 'app-view-flashcard-thread',
  templateUrl: './view-flashcard-thread.component.html',
  styleUrls: ['./view-flashcard-thread.component.css'],
})
export class ViewFlashcardThreadComponent implements OnInit {
  public flashcardId: number = 0;
  public flashcard?: Flashcard;

  public answers!: Answer[];

  searchText?: string;
  subscription!: Subscription;

  constructor(
    private flashcardService: FlashcardService,
    private answerService: AnswerService,
    private searchBar: SearchContentService
  ) {}

  ngOnInit(): void {
    this.flashcardId = this.flashcardService.selectedFlashcardForThread;
    this.getSelectedFlashcard();
    this.getAllAnswers();

    this.subscription = this.searchBar.currentMessage.subscribe((message) => {
      this.searchText = message;
      this.searchAnswers(this.searchText);
    });
  }

  getSelectedFlashcard(): void {
    this.flashcardService.getFlashcardById(this.flashcardId).then(
      (result: any) => {
        this.flashcard = result;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getAllAnswers(): void {
    this.flashcardService.getAnswers(this.flashcardId).then(
      (response: any) => {
        this.answers = response.content;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  searchAnswers(key: string): void {
    let results: Answer[] = [];
    for (const answer of this.answers) {
      if (answer.answerText.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(answer);
      }
    }
    this.answers = results;
    if (results.length === 0 || !key) {
      this.getAllAnswers();
    }
  }

  setAnswerAsSelected(event: Event, answerId: number): void {
    event.stopPropagation();
    this.answerService.setAnswerAsSelected(answerId).subscribe({
      next: (result) => {
        this.answers = this.answers.map((answer) => {
          if (answer.answerId == result.answerId) {
            return result;
          }
          return answer;
        });
      },
    });
  }

  vote(event: Event): void {
    event.stopPropagation();
  }
}
