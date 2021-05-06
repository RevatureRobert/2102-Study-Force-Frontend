import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { FlashcardService } from '../../../service/flashcard.service';
import { FlashcardComponent } from '../../ui/flashcard/flashcard.component';
import {HttpErrorResponse} from '@angular/common/http';

import { FlashcardPage } from "src/app/flashcard/model/flashcardPage";
import { Topic } from 'src/app/flashcard/model/topic';
import { TopicService } from 'src/app/flashcard/service/topic.service';


@Component({
  selector: 'app-flashcard-page',
  templateUrl: './flashcard-page.component.html',
  styleUrls: ['./flashcard-page.component.css']
})
export class FlashcardPageComponent implements OnInit {

  flashcardPage?: FlashcardPage;
  mode: Mode = Mode.NONE;
  modeChoices:DisplayData[] = [];
  topics: Topic[] = []

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
      this.flashcardService.getAllByPage(this.flashcardPage.number - 1).subscribe({
        next: result => this.flashcardPage = result
      });
  }

  nextPage(): void {
    if(this.flashcardPage)
      this.flashcardService.getAllByPage(this.flashcardPage.number + 1).subscribe({
        next: result => this.flashcardPage = result
      });
  }

  setModeToNone(): void {
    this.mode = Mode.NONE;
    this.modeChoices = []

    this.loadPage(0, 0);
  }

  setModeToDifficulty(): void {
    this.mode = Mode.DIFFICULTY;
    this.modeChoices = [
      {itemId: 1, displayString: "Easy"},
      {itemId: 2, displayString: "Medium"},
      {itemId: 3, displayString: "Hard"}];

      this.loadPage(0, 1);
    }

  setModeToResolved(): void {
    this.mode = Mode.RESOLVED;
    this.modeChoices = [
      {itemId: 1, displayString: "Resolved"},
      {itemId: 2, displayString: "Not Resolved"}];

      this.loadPage(0, 1);
  }

  setModeToTopic(): void {
    this.mode = Mode.TOPIC;
    console.log(this.topics);
    this.modeChoices = this.topics.map((topic: Topic)=> {
      return {itemId: topic.id, displayString: topic.topicName};
    });

    this.loadPage(0, this.modeChoices[0].itemId);
  }

  loadPage(page: number, itemId: number) {
    switch (this.mode) {
      case Mode.NONE:
        console.log("none");
        this.flashcardService.getAllByPage(0).subscribe({
          next: result => this.flashcardPage = result
        });
        break;
      case Mode.TOPIC:
        console.log("topic");
        break;
      case Mode.DIFFICULTY:
        console.log("diff");
        break;
      case Mode.RESOLVED:
        console.log("res");
        break;
      default:
        break;
    }
  }

}

interface DisplayData {
  itemId: number;
  displayString: string;
}

enum Mode {
  NONE,
  TOPIC,
  DIFFICULTY,
  RESOLVED
}
