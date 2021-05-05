import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-answer',
  templateUrl: './flashcard-answer.component.html',
  styleUrls: ['./flashcard-answer.component.css']
})
export class FlashcardAnswerComponent implements OnInit {

  subscribed = false;

  newAnswerIcon = "../../../assets/add new answer.png"

  // A flashcard router will need to be passed into this component
  constructor() { }

  ngOnInit(): void {
  }

  // On new answer, the router should route the user to a create an answer page.
  newAnswer() {


  }
}
