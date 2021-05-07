import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardService } from '../../../../service/flashcard.service';


@Component({
  selector: 'app-flashcard-grid',
  templateUrl: './flashcard-grid.component.html',
  styleUrls: ['./flashcard-grid.component.css']
})
export class FlashcardGridComponent implements OnInit {

  index!:number;

  public flashcards!: Flashcard[];

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit(): void {
    this.getAllFlashcards();
    this.index = this.flashcards.length;
  }


  getAllFlashcards(): void {
    this.flashcardService.getAll().subscribe(
      (response: any) => {
        console.log(response.entries);
        this.flashcards = response.content;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );


  }

}
