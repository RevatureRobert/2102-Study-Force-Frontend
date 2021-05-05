import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardService } from '../../../service/flashcard.service';
import { FlashcardComponent } from '../../ui/flashcard/flashcard.component';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-flashcard-page',
  templateUrl: './flashcard-page.component.html',
  styleUrls: ['./flashcard-page.component.css']
})
export class FlashcardPageComponent implements OnInit {

  public flashcards!: Flashcard[];

  constructor(private flashcardService: FlashcardService) {
    console.log('CONSTRUCTOR');
    this.getAllFlashcards();
  }

  getAllFlashcards(): void {
    this.flashcardService.getAll().subscribe(
      (response: Flashcard[]) => {
        this.flashcards = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  ngOnInit(): void {
    console.log('INIT');

  }


}
