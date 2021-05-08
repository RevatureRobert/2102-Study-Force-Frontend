import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../../../service/flashcard.service';
import { TopicService } from 'src/app/flashcard/service/topic.service';

/**
 * component that holds the flashcard grid
 * routes to CreateFlashcardPageComponent
 */
@Component({
  selector: 'app-flashcard-page',
  templateUrl: './flashcard-page.component.html',
  styleUrls: ['./flashcard-page.component.css']
})
export class FlashcardPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
