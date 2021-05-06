import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardService } from '../../../service/flashcard.service';
import { FlashcardComponent } from '../../ui/flashcard/flashcard.component';
import {HttpErrorResponse} from '@angular/common/http';

import { FlashcardPage } from "src/app/flashcard/model/flashcardPage";


@Component({
  selector: 'app-flashcard-page',
  templateUrl: './flashcard-page.component.html',
  styleUrls: ['./flashcard-page.component.css']
})
export class FlashcardPageComponent implements OnInit {

  flashcardPage?: FlashcardPage;

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit(): void {
    this.flashcardService.getAllByPage(0).subscribe({
      next: result => this.flashcardPage = result
    });
  }

  prevPage(): void {
    if(this.flashcardPage)
      this.flashcardService.getAllByPage(this.flashcardPage.number - 1).subscribe({
        next: result => this.flashcardPage = result
      });
  }

  nextPage(): void {
    if(this.flashcardPage)
      this.flashcardService.getAllByPage(this.flashcardPage.number + 1).subscribe({
        next: result => this.flashcardPage = result
      });
  }

}
