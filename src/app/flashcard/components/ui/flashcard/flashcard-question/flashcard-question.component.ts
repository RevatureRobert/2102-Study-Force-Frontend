import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { RateService } from '../../../../service/rate.service'


/**
 * This component displays when a Flashcard is flipped to the question side.
 */
@Component({
  selector: 'app-flashcard-question',
  templateUrl: './flashcard-question.component.html',
  styleUrls: ['./flashcard-question.component.css']
})
export class FlashcardQuestionComponent implements OnInit {

  @Input() question!: string;
  @Input() difficulty!: any;
  @Input() answerId!: number;
  @Input() userId!: number;
  @Input() flashcardId!: number;
  @Output() click = new EventEmitter;

  isSliderActive: boolean = false;

  subscribed = false;
  bellStyle = "../../../assets/bell.svg"

  constructor(private rateService: RateService) { }

  // Converts numeric difficuulty to alphabetic difficulty
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

  // Allows users to subscribe to Flashcard
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

  // Activated when user clicks on the rating slider.
  // Only stores 1 rating per user.
  activateSlider(value: number) {
    this.isSliderActive = true;

    const rating = {
      flashcardId: this.flashcardId,
      userId: this.userId,
      ratingScore: value
    }

    if (this.flashcardId != undefined) {

      this.rateService.get(this.flashcardId, this.userId).toPromise().catch(error => {
        if (error.status == 410) {
          this.rateService.create(rating).subscribe()
        }
      })

    }


  }

}
