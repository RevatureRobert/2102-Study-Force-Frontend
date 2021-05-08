import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardPageable } from 'src/app/flashcard/model/flashcard-pageable';
import { FlashcardPage } from 'src/app/flashcard/model/flashcardPage';
import { Topic } from 'src/app/flashcard/model/topic';
import { TopicService } from 'src/app/flashcard/service/topic.service';
import { FlashcardService } from '../../../../service/flashcard.service';

/**
 * displays and manipulates the grid of flashcards based on user preference
 */
@Component({
  selector: 'app-flashcard-grid',
  templateUrl: './flashcard-grid.component.html',
  styleUrls: ['./flashcard-grid.component.css']
})
export class FlashcardGridComponent implements OnInit {

  flashcardPage?: FlashcardPage;
  mode: Mode = Mode.NONE;
  modeChoices:DisplayData[] = [];
  topics: Topic[] = [];
  input: any = null;
  flashcards: Flashcard[] = [];

  /**
   *
   * @param flashcardService Provides methods for passing Flashcard objects between the frontend and backend
   * @param topicService Provides methods for passing Topic objects between the frontend and backend
   */
  constructor(private flashcardService: FlashcardService, private topicService: TopicService) { }

  ngOnInit(): void {
    this.flashcardService.getAllByPage(0).subscribe({
      next: result => this.flashcardPage = result
    });

    this.topicService.getAll().subscribe({
      next: result => this.topics = result
    });
  }

  /**
   * navigates to the previous page of flashcards
   */
  prevPage(): void {
    if(this.flashcardPage)
      this.loadPage(this.flashcardPage.number - 1);
  }

  /**
   * displays all flashcards, displays error message if there is an HttpErrorResponse
   */
  getAllFlashcards(): void {
    this.flashcardService.getAll().subscribe(
      (response: FlashcardPageable) => {

        this.flashcards = response.content;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /**
   * navigates to the next page of flashcards
   */
  nextPage(): void {
    if(this.flashcardPage)
      this.loadPage(this.flashcardPage.number + 1);
  }

  /**
   * sets mode to default mode
   */
  setModeToNone(): void {
    this.mode = Mode.NONE;
    this.modeChoices = []
    this.input = null;
    this.loadPage(0);
  }

  /**
   * sets mode to allow user to search by difficulty
   */
  setModeToDifficulty(): void {
    this.mode = Mode.DIFFICULTY;
    this.modeChoices = [
      {input: 0, displayString: "Easy"},
      {input: 1, displayString: "Medium"},
      {input: 2, displayString: "Hard"}];

      this.input = 1;
      this.loadPage(0);
    }

  /**
   * sets mode to allow users to search by resolved flashcards
   */
  setModeToResolved(): void {
    this.mode = Mode.RESOLVED;
    this.modeChoices = [
      {input: true, displayString: "Resolved"},
      {input: false, displayString: "Not Resolved"}];
      this.input = this.modeChoices[0].input;
      this.loadPage(0);
  }

  /**
   * sets mode to allow users to search by topic
   */
  setModeToTopic(): void {
    this.mode = Mode.TOPIC;
    this.modeChoices = this.topics.map((topic: Topic)=> {
      return {input: topic.topicName, displayString: topic.topicName};
    });
    this.input = this.modeChoices[0].input;
    this.loadPage(0);
  }

  /**
   * sets the input
   * @param input
   */
  setInput(input: any) {
    this.input = input;
    this.loadPage(0);
  }

  loadPage(page: number) {
    switch (this.mode) {
      case Mode.NONE:
        this.flashcardService.getAllByPage(page).subscribe({
          next: result => this.flashcardPage = result
        });
        break;
      case Mode.TOPIC:
        this.flashcardService.getAllByTopic(page, this.input).subscribe({
          next: result => this.flashcardPage = result
        });
        break;
      case Mode.DIFFICULTY:
        this.flashcardService.getAllByDifficultyPage(page, this.input).subscribe({
          next: result => this.flashcardPage = result
        });
        break;
      case Mode.RESOLVED:
        this.flashcardService.getAllByResolved(page, this.input).subscribe({
          next: result => this.flashcardPage = result
        });
        break;
      default:
        break;
    }
  }

}

interface DisplayData {
  input: any;
  displayString: string;
}

enum Mode {
  NONE = "None",
  TOPIC = "Topic",
  DIFFICULTY = "Difficulty",
  RESOLVED = "Resolved"
}
