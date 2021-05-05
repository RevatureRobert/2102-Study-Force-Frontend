import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-question',
  templateUrl: './flashcard-question.component.html',
  styleUrls: ['./flashcard-question.component.css']
})
export class FlashcardQuestionComponent implements OnInit {

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
