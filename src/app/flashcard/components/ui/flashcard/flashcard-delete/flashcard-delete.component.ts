import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardComponent } from '../flashcard.component';


@Component({
  selector: 'app-flashcard-delete',
  template: `
  <button class="button" (click)="deleteFlashcard()">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    </svg>
  </button>
  `,
  styles: [
  ]
})
export class FlashcardDeleteComponent implements OnInit {

  @Input() flashcardId?: number;

  constructor(private parent: FlashcardComponent) {}

  ngOnInit(): void {
    this.flashcardId = this.parent.deleteId;
  }

  deleteFlashcard(): void {
    console.log("tryin delete this");
    console.log(this.flashcardId);
  }

}