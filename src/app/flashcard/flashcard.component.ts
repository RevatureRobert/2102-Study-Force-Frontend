import { Component, OnInit } from '@angular/core';
import { FlashcardService } from './service/flashcard.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
