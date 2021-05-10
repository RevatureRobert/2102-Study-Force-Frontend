import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/flashcard/model/answer';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardService } from 'src/app/flashcard/service/flashcard.service';


/**
 * Allows user to view all answers connected to a flashcard;
 */
@Component({
  selector: 'app-view-flashcard-thread',
  templateUrl: './view-flashcard-thread.component.html',
  styleUrls: ['./view-flashcard-thread.component.css']
})
export class ViewFlashcardThreadComponent implements OnInit {

  public flashcardId: number = 0;
  public flashcard?: Flashcard;

  public answers!: Answer[];

  constructor(private flashcardService: FlashcardService) {

  }

  ngOnInit(): void {
    console.log(localStorage.getItem('loggedInUser'));
    this.flashcardId = this.flashcardService.selectedFlashcardForThread;
    this.getSelectedFlashcard();
    this.getAllAnswers();

  }

  /**
   * method to set flashcard given a flashcardId
   */
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

  /**
   * method that gets all answers for a specific flashcardId
   */
  getAllAnswers(): void {
    this.flashcardService.getAnswers(this.flashcardId).subscribe(
      (response: any) => {
        console.log(response.entries);
        this.answers = response.content;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}












