import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardPageable } from 'src/app/flashcard/model/flashcard-pageable';
import { FlashcardService } from '../../../service/flashcard.service';
import { FlashcardComponent } from '../../ui/flashcard/flashcard.component';
import { FlashcardQuestionComponent } from '../../ui/flashcard/flashcard-question/flashcard-question.component';
import {HttpErrorResponse} from '@angular/common/http';
import { BasePageComponent } from "../../../../global-components/base-page/base-page.component";


@Component({
  selector: 'app-flashcard-page',
  templateUrl: './flashcard-page.component.html',
  styleUrls: ['./flashcard-page.component.css']
})
export class FlashcardPageComponent implements OnInit {

  public flashcards!: Flashcard[];

  constructor(private flashcardService: FlashcardService) {
    this.getAllFlashcards();

  }

  getAllFlashcards(): void {
    this.flashcardService.getAll().subscribe(
      (response: FlashcardPageable) => {

        this.flashcards = response.content;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    // this.flashcardService.getAllByDifficulty(1).subscribe(
    //   (response: any) => {
    //     console.log(response)
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
  }


  ngOnInit(): void {

  }



}
