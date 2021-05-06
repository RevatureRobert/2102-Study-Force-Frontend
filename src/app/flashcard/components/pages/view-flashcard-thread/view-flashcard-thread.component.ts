import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/flashcard/model/answer';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardService } from 'src/app/flashcard/service/flashcard.service';

@Component({
  selector: 'app-view-flashcard-thread',
  templateUrl: './view-flashcard-thread.component.html',
  styleUrls: ['./view-flashcard-thread.component.css']
})
export class ViewFlashcardThreadComponent implements OnInit {

  private flashcardId: number;
  private flashcard!: Flashcard;

  private answers: Answer[];

  constructor(private flashcardService: FlashcardService) {

  }



  ngOnInit(): void {
    this.flashcardService.getFlashcardById(this.flashcard.id!)
    this.flashcardService.getAnswers(this.flashcard?.id!);
  }


}
