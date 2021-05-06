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
  topics: Topic[] = [];
  input: any = null;

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

  nextPage(): void {
    if(this.flashcardPage)
      this.loadPage(this.flashcardPage.number + 1);
  }

  setModeToNone(): void {
    this.mode = Mode.NONE;
    this.modeChoices = []
    this.input = null;
    this.loadPage(0);
  }

  setModeToDifficulty(): void {
    this.mode = Mode.DIFFICULTY;
    this.modeChoices = [
      {input: 1, displayString: "Easy"},
      {input: 2, displayString: "Medium"},
      {input: 3, displayString: "Hard"}];

      this.input = 1;
      this.loadPage(0);
    }

  setModeToResolved(): void {
    this.mode = Mode.RESOLVED;
    this.modeChoices = [
      {input: true, displayString: "Resolved"},
      {input: false, displayString: "Not Resolved"}];

      this.input = true;
      this.loadPage(0);
  }

  setModeToTopic(): void {
    this.mode = Mode.TOPIC;
    this.modeChoices = this.topics.map((topic: Topic)=> {
      return {input: topic.topicName, displayString: topic.topicName};
    });
    this.input = this.modeChoices[0].input;
    this.loadPage(0);
  }

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
        this.flashcardService.getAllByDifficulty(page, this.input).subscribe({
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
  NONE,
  TOPIC,
  DIFFICULTY,
  RESOLVED
}
