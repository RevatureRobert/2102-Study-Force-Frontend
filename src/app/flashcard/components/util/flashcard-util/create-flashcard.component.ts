import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subscriber, Subscription } from 'rxjs';
import { FlashcardService } from '../../../service/flashcard.service'

@Component({
  selector: 'app-flashcard-util',
  templateUrl: './create-flashcard.component.html',
  styleUrls: ['./create-flashcard.component.css']
})
export class CreateFlashcardComponent implements OnInit {

  subscription: Subscription;

  form: any = {
    creator: null,
    topic: null,
    question: null,
    questionDifficultyTotal: null,
    questionDifficultyAverage: null,
    createdTime: null,
    resolutionTime: null
  };

  constructor(private flascardService: FlashcardService) {
    this.subscription = this.flascardService.create(this.form).subscribe();
  }


  ngOnInit(): void {

  }

  onSubmit(): void {
    this.subscription = this.flascardService.create(this.form).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  onDestroy(): void {
    this.subscription.unsubscribe();
  }
}
