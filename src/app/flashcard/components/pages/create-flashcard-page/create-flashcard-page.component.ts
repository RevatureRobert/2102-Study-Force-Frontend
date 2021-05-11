import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscriber, Subscription } from 'rxjs';
import { FlashcardRoutingModule } from 'src/app/flashcard/flashcard-routing.module';
import { Topic } from 'src/app/flashcard/model/topic';
import { TopicService } from 'src/app/flashcard/service/topic.service';
import { FlashcardService } from '../../../service/flashcard.service';

@Component({
  selector: 'app-create-flashcard-page',
  templateUrl: './create-flashcard-page.component.html',
  styleUrls: ['./create-flashcard-page.component.css']
})
export class CreateFlashcardPageComponent implements OnInit {

  topics: Topic[] = [];
  subscription: Subscription;
  anonymous = false;

  form: any = {
    userId: null,
    topicId: {},
    question: null,
    difficulty: null
  };


  constructor(private flashcardService: FlashcardService, private topicService: TopicService, private router: Router) {
    this.subscription = new Observable<any>().subscribe();
    this.topicService.getAll().subscribe(res => this.topics = res);
  }


  ngOnInit(): void {
  }

  onSubmit(): void {

    // TODO: set creator to current user
    this.form.userId = 1;

    switch (this.form.difficulty) {
      case 'easy':
        this.form.difficulty = 1;
        break;
      case 'medium':
        this.form.difficulty = 2;
        break;
      case 'hard':
        this.form.difficulty = 3;
        break;
    }

    console.log(this.form);

    this.subscription = this.flashcardService.create(this.form).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/view-flashcards'])
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}







