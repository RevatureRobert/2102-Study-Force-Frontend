import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/flashcard/model/topic';
import { TopicService } from 'src/app/flashcard/service/topic.service';

@Component({
  selector: 'app-flashcard-topic',
  templateUrl: './flashcard-topic.component.html',
  styleUrls: ['./flashcard-topic.component.css']
})
export class FlashcardTopicComponent implements OnInit {

  topics:Topic[] = [];

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getAll().subscribe({
      next: result => this.topics = result
    })
  }

  addTopic(topicName: string): void {
    this.topicService.addTopic(topicName).subscribe({
      next: result => this.topics.push(result)
    });
  }

  deleteTopic(deleteTopic: Topic): void {

    if(confirm(`Deleting ${deleteTopic.topicName} would also delete the questions with ${deleteTopic.topicName} as topic.`)) {
        this.topicService.deleteTopic(deleteTopic.id).subscribe({
        next: result => this.topics = this.topics.filter(topic => topic.id != result.id)
      });
    }

  }

}
