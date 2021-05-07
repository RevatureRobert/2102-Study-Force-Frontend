import { Component, Input, OnInit } from '@angular/core';
import { Vote } from 'src/app/flashcard/model/vote';
import { VoteService } from "../../flashcard/service/vote.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  //TODO: Change this back from any >:(
  @Input() answerId!: any;
  @Input() answerScore!: any;
  @Input() userId!: number;

  upVoteSource = "../../../assets/up doot unclicked.svg"
  downVoteSource = "../../../assets/down doot unclicked.svg"
  scoreColor = "color: var(--duskwood)"

  hasVoted=false;

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
  }

  upVote() {
    this.upVoteSource = "../../../assets/selectedupvote.svg";
    this.scoreColor = "color: var(--red-orange-juice)";
    this.hasVoted =  true;
    // This will be removed once the userId is correct
    this.answerScore += 1;
    this.voteService.createAnswerVote({answerId: this.answerId, userId: this.userId, value: 1}).subscribe(
      res => {
        console.log(res);

      }
    );
  }

  downVote() {
    this.downVoteSource = "../../../assets/selecteddownvote.svg";
    this.scoreColor = "color: var(--wizard-blue)";
    this.hasVoted = true;
    // This will be removed once the userId is correct
    this.answerScore -= 1;
    this.voteService.createAnswerVote({answerId: this.answerId, userId: this.userId, value: -1}).subscribe(
      res => {
        console.log(res);

      }
    );
  }

}
