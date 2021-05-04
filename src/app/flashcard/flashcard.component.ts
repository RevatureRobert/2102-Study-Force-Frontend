import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flip = false;

  toggleView() {
    this.flip = !this.flip;
  }
}
