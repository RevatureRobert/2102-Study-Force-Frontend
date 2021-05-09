import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardPageable } from 'src/app/flashcard/model/flashcard-pageable';
import { FlashcardPage } from 'src/app/flashcard/model/flashcardPage';
import { Topic } from 'src/app/flashcard/model/topic';
import { TopicService } from 'src/app/flashcard/service/topic.service';
import { FlashcardService } from '../../../../service/flashcard.service';

/**
 * displays flashcards in a grid pattern and allows different modes for users to customize settings
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
  private userId = 1;

  /**
   * @param flashcardService provides methods for passing Flashcard objects between the front and back end
   * @param topicService provides methods for passing Topic objects between the front and back end
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
   * method to load the previous page of flashcards
   */
  prevPage(): void {
    if(this.flashcardPage)
      this.loadPage(this.flashcardPage.number - 1);
  }

  /**
   * method to get all flashcards with pagination
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
   * method to load the next page of flashcards
   */
  nextPage(): void {
    if(this.flashcardPage)
      this.loadPage(this.flashcardPage.number + 1);
  }

  /**
   * method to set mode to none/default
   */
  setModeToNone(): void {
    this.mode = Mode.NONE;
    this.modeChoices = []
    this.input = null;
    this.loadPage(0);
  }

  /**
   * method to set mode to difficulty
   * 3 input values that correspond to easy, medium, and hard
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
     * method to set mode to resolved
     * 2 input values that correspond to resolved or unresolved
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
     * method to set mode to resolved
     * 1 input value that corresponds to a topic
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
   * method to set mode to owned
   */
  setModeToOwned(): void{
    this.mode = Mode.OWNED;
    this.loadPage(0);
  }

  /**
   * method to set the input that is sent to other methods
   * @param input parameter of type any that corresponds to the users choice depending on mode
   */
  setInput(input: any) {
    this.input = input;
    this.loadPage(0);
  }

  /**
   * method that loads pages to be displayed based on settings
   * @param page the page number to display
   */
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
        case Mode.OWNED:
          this.flashcardService.getFlashcardsByUserId(this.userId).subscribe({
            next: result => this.flashcardPage = result
          });
          break;
      default:
        break;
    }
  }

}

/**
 * model for what each mode has, contains input and string output
 */
interface DisplayData {
  input: any;
  displayString: string;
}

/**
 * all modes available for the user to categorize flashcards by
 */
enum Mode {
  NONE = "None",
  TOPIC = "Topic",
  DIFFICULTY = "Difficulty",
  RESOLVED = "Resolved",
  OWNED = "Owned"
}
