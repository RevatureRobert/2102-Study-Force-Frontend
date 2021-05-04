import { Component, OnInit } from '@angular/core';
import { FlashcardComponent } from 'src/app/flashcard/flashcard.component';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardPageComponent } from '../../pages/flashcard-page/flashcard-page.component';

@Component({
  selector: 'app-flip-flashcard',
  templateUrl: './flip-flashcard.component.html',
  styleUrls: ['./flip-flashcard.component.css']
})
export class FlipFlashcardComponent implements OnInit {
  flashcard: Flashcard | null = null;

  constructor( public fliper: FlashcardPageComponent ) { }

  ngOnInit(): void {
    this.flashcard = this.fliper.flashcard;
  }

  isShowDiv = false;

  onClickMe() {

    this.isShowDiv = !this.isShowDiv;

  }

}
