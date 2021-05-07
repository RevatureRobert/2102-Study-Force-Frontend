import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
// const EventEmitter = require('events');
import { FlashcardComponent } from '../flashcard.component';



@Component({
  selector: 'app-flashcard-question',
  templateUrl: './flashcard-question.component.html',
  styleUrls: ['./flashcard-question.component.css']
})
export class FlashcardQuestionComponent implements OnInit {

  @Input() question!: string;
  @Input() difficulty!: any;
  @Input() answerId!: number;
  @Input() flashcard!: Flashcard;
  @Output() click = new EventEmitter;
  subscribed = false;
  bellStyle = "../../../assets/bell.svg"

  constructor() { }

  ngOnInit(): void {
    switch (this.difficulty) {
      case 1:
          this.difficulty = "Easy";
        break;
      case 2:
          this.difficulty = "Medium";
        break;
      case 3:
          this.difficulty = "Hard";
        break;
      default:
        break;
    }
  }

  subscribe(event: Event) {
    this.subscribed = !this.subscribed

    if(this.subscribed) {
      this.bellStyle="../../../assets/bell fill.svg"
    }
    else {
      this.bellStyle="../../../assets/bell.svg"
    }

    event.stopPropagation();
  }

  stopPropogation(event: Event) {
    event.stopPropagation();
  }

}
