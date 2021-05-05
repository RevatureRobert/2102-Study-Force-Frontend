import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  subscribed = false;

  bellStyle = "../../../assets/bell.svg"

  constructor() { }

  ngOnInit(): void {
  }

  subscribe() {
    this.subscribed = !this.subscribed

    if(this.subscribed) {
      this.bellStyle="../../../assets/bell fill.svg"
    }
    else {
      this.bellStyle="../../../assets/bell.svg"
    }

  }

}
