import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subscriber, Subscription } from 'rxjs';
import { Topic } from 'src/app/flashcard/model/topic';
import { TopicService } from 'src/app/flashcard/service/topic.service';
import { FlashcardService } from '../../../service/flashcard.service';

/**
 * class for a user to create a flashcard question
 */
@Component({
  selector: 'app-create-flashcard-page',
  templateUrl: './create-flashcard-page.component.html',
  styleUrls: ['./create-flashcard-page.component.css']
})
export class CreateFlashcardPageComponent implements OnInit {

  topics: Topic[] = [];
  subscription: Subscription;
  anonymous = false;

  /**
   * holds various fields of a flashcard question
   */
  form: any = {
    userId: null,
    topicId: {},
    question: null,
    difficulty: null
  };

  /**
   * @param flashcardService Provides methods for passing Flashcard objects between the frontend and backend
   * @param topicService Provides methods for passing Topic objects between the frontend and backend
   */
  constructor(private flashcardService: FlashcardService, private topicService: TopicService) {
    this.subscription = new Observable<any>().subscribe();
    this.topicService.getAll().subscribe(res => this.topics = res);
  }


  ngOnInit(): void {
  }

  onSubmit(): void {

    // TODO: set creator to current user
    this.form.userId = 1;

    /**
     * uses string to set difficulty int value
     */
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
      }
    );
  }

  onDestroy(): void {
    this.subscription.unsubscribe();
  }
}







