import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
// const EventEmitter = require('events');
import { FlashcardComponent } from '../flashcard.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



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

  isSliderActive: boolean = false;

  subscribed = false;
  bellStyle = "../../../assets/bell.svg"

  constructor() { }

  ngOnInit(): void {
    switch (this.difficulty) {
      case 0:
          this.difficulty = "Easy";
        break;
      case 1:
          this.difficulty = "Medium";
        break;
      case 2:
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

  activateSlider() {
    this.isSliderActive = true;
    if (this.isSliderActive) {
      console.log("ACTIVE");

    }
  }

}
