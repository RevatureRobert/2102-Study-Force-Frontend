import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subscriber, Subscription } from 'rxjs';
import { Topic } from 'src/app/flashcard/model/topic';
import { TopicService } from 'src/app/flashcard/service/topic.service';
import { FlashcardService } from '../../../service/flashcard.service'

@Component({
  selector: 'app-create-flashcard-page',
  templateUrl: './create-flashcard-page.component.html',
  styleUrls: ['./create-flashcard-page.component.css']
})
export class CreateFlashcardPageComponent implements OnInit {

  topics: Topic[] = [];
  subscription: Subscription;
  anonymous: boolean = false;

  form: any = {
    creator: null,
    topic: {},
    question: null,
    questionDifficultyTotal: null
  }

  constructor(private flashcardService: FlashcardService, private topicService: TopicService) {
    this.subscription = new Observable<any>().subscribe();
    this.topicService.getAll().subscribe(res => this.topics = res);
  }


  ngOnInit(): void {
  }

  onSubmit(): void {

    if (this.anonymous) {
      this.form.creator = null;
    } else {
      // this.form.creator =
    }

    switch(this.form.questionDifficultyTotal) {
      case "easy":
        this.form.questionDifficultyTotal = 1;
        break;
      case "medium":
        this.form.questionDifficultyTotal = 2;
        break;
      case "hard":
        this.form.questionDifficultyTotal = 3;
        break;
    }

    this.subscription = this.flashcardService.create(this.form).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  onDestroy(): void {
    this.subscription.unsubscribe();
  }
}
