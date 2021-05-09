import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subscriber, Subscription } from 'rxjs';
import { Topic } from 'src/app/flashcard/model/topic';
import { TopicService } from 'src/app/flashcard/service/topic.service';
import { FlashcardService } from '../../../service/flashcard.service';

/**
 * contains functionality to create flashcards
 * uses form to accept input to customize flashcards
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
   * settings for flashcards
   */
  form: any = {
    userId: null,
    topicId: {},
    question: null,
    difficulty: null
  };

  /**
   * constructor for creating a flashcard
   * sets subscription
   * sets topics to all topics
   * @param flashcardService provides methods for passing Flashcard objects between the frontend and backend
   * @param topicService provides methods for passing Topic objects between the frontend and backend
   */
  constructor(private flashcardService: FlashcardService, private topicService: TopicService) {
    this.subscription = new Observable<any>().subscribe();
    this.topicService.getAll().subscribe(res => this.topics = res);
  }

  ngOnInit(): void {
  }

  /**
   * sends flashcard information to the flashcard service
   * persists flashcard to database
   */
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
      }
    );
  }

  /**
   * stops waiting on updates if the flashcard is deleted
   */
  onDestroy(): void {
    this.subscription.unsubscribe();
  }
}







