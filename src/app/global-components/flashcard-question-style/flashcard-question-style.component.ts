import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-question-style',
  templateUrl: './flashcard-question-style.component.html',
  styleUrls: ['./flashcard-question-style.component.css']
})
export class FlashcardQuestionStyleComponent implements OnInit {

  subscribed = false;

  bellStyle = '../../../assets/bell.svg';

  constructor() { }

  ngOnInit(): void {
  }

  subscribe(): void {
    this.subscribed = !this.subscribed;

    if (this.subscribed) {
      this.bellStyle = '../../../assets/bell fill.svg';
    }
    else {
      this.bellStyle = '../../../assets/bell.svg';
    }

  }

}
