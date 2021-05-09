import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardPageable } from 'src/app/flashcard/model/flashcard-pageable';
import { FlashcardPage } from 'src/app/flashcard/model/flashcardPage';
import { Topic } from 'src/app/flashcard/model/topic';
import { TopicService } from 'src/app/flashcard/service/topic.service';
import { FlashcardService } from '../../../../service/flashcard.service';


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

  filterDisplay:string = "";

  filterDisplay:string = "";

  constructor(private flashcardService: FlashcardService, private topicService: TopicService) { }

  ngOnInit(): void {
    this.flashcardService.getAllByPage(0).subscribe({
      next: result => this.flashcardPage = result
    });

    this.topicService.getAll().subscribe({
      next: result => this.topics = result
    });
  }

  prevPage(): void {
    if(this.flashcardPage)
      this.loadPage(this.flashcardPage.number - 1);
  }

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

  nextPage(): void {
    if(this.flashcardPage)
      this.loadPage(this.flashcardPage.number + 1);
  }

  setModeToNone(): void {
    this.mode = Mode.NONE;
    this.modeChoices = []
    this.input = null;
    this.setInput(null)
  }

  setModeToDifficulty(): void {
    this.mode = Mode.DIFFICULTY;
    this.modeChoices = [
      {input: 1, displayString: "Easy"},
      {input: 2, displayString: "Medium"},
      {input: 3, displayString: "Hard"}];
      this.setInput(this.modeChoices[0].input)
    }

  setModeToResolved(): void {
    this.mode = Mode.RESOLVED;
    this.modeChoices = [
      {input: true, displayString: "Resolved"},
      {input: false, displayString: "Not Resolved"}];
      this.setInput(this.modeChoices[0].input)
  }

  setModeToTopic(): void {
    this.mode = Mode.TOPIC;
    this.modeChoices = this.topics.map((topic: Topic)=> {
      return {input: topic.topicName, displayString: topic.topicName};
    });
    this.setInput(this.modeChoices[0].input)
<<<<<<< HEAD
=======
  }

  setModeToOwned(): void{
    this.mode = Mode.OWNED;
    this.loadPage(0);
>>>>>>> 3fb2a0d9f5007b2b4818197e152df2acbfa3e7aa
  }

  setInput(input: any) {
    this.input = input;

    switch (input) {
      case null:
        this.filterDisplay = "";
        break;
      case true:
        this.filterDisplay = "Resolved";
        break;
      case false:
        this.filterDisplay = "Not Resolved";
        break;
      case 1:
        this.filterDisplay = "Easy";
        break;
      case 2:
        this.filterDisplay = "Medium";
        break;
      case 3:
        this.filterDisplay = "Hard";
        break;
      default:
        this.filterDisplay = input;
        break;
    }

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
  NONE = "Filter By:",
  TOPIC = "Topic",
  DIFFICULTY = "Difficulty",
  RESOLVED = "Resolved"
}
