import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-flashcard',
  templateUrl: './flip-flashcard.component.html',
  styleUrls: ['./flip-flashcard.component.css']
})
export class FlipFlashcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShowDiv = false;

  onClickMe() {

    this.isShowDiv = !this.isShowDiv;

  }

}
