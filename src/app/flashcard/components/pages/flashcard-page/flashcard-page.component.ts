import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardService } from '../../../service/flashcard.service'


@Component({
  selector: 'app-flashcard-page',
  templateUrl: './flashcard-page.component.html',
  styleUrls: ['./flashcard-page.component.css']
})
export class FlashcardPageComponent implements OnInit {

  flashcard: Flashcard | null = null;

  constructor(flashcardService: FlashcardService) {
    console.log("CONSTRUCTOR");

    flashcardService.get(1).toPromise().then(res => this.flashcard = res);
  }

  ngOnInit(): void {
    console.log("INIT");

  }

}
