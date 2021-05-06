import { Component, OnInit } from '@angular/core';
import { FlashcardRoutingModule } from 'src/app/flashcard/flashcard-routing.module';
import { Location } from '@angular/common';
import { Route, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-flashcard-answer',
  templateUrl: './flashcard-answer.component.html',
  styleUrls: ['./flashcard-answer.component.css']
})
export class FlashcardAnswerComponent implements OnInit {

  subscribed = false;

  newAnswerIcon = "../../../assets/add new answer.png"

  // A flashcard router will need to be passed into this component
  constructor(
    private activatedRoute : ActivatedRoute,
    private location : Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
