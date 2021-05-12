import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/flashcard/model/answer';
import { VoteService } from '../../flashcard/service/vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  @Input() answer!: Answer;
  @Input() answerId!: number;
  answerScore: number = 0;
  @Input() userId!: number;

  upVoteSource = '/assets/updootunclicked.svg';
  downVoteSource = 'vote-assets/downdootunclicked.svg';
  scoreColor = 'color: var(--duskwood)';

  hasVoted = false;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.voteService.getAllVotes(this.answerId).subscribe((res) => {
      for (let vote of res) {
        this.answerScore += vote.value;
      }
    });

    this.hasVoted = true;
    if (this.answerId != undefined) {
      let error418: boolean = false;

      this.voteService
        .getVote(this.answerId, this.userId)
        .toPromise()
        .catch((error) => {
          if (error.status == 418) {
            error418 = true;
          }
        })
        .then((res) => {
          if (error418) {
            this.hasVoted = false;
          } else {
            this.hasVoted = true;
            res.value > 0
              ? (this.scoreColor = 'color: var(--blue)')
              : (this.scoreColor = 'color: var(--red-orange-juice)');
          }
        });
    }
  }

  upVote() {
    this.upVoteSource = 'assets/selectedupvote.png';
    this.scoreColor = 'color: var(--red-orange-juice)';
    this.hasVoted = true;
    // This will be removed once the userId is correct
    this.answerScore += 1;

    if (this.answerId != undefined) {
      this.voteService
        .getVote(this.answerId, this.userId)
        .toPromise()
        .catch((error) => {
          if (error.status == 418) {
            this.voteService
              .createAnswerVote({
                answerId: this.answerId,
                userId: this.userId,
                value: 1,
              })
              .subscribe((res) => {});
          }
        });
    }
  }

  downVote() {
    this.downVoteSource = 'assets/selecteddownvote.svg';
    this.scoreColor = 'color: var(--blue)';
    this.hasVoted = true;
    // This will be removed once the userId is correct
    this.answerScore -= 1;

    if (this.answerId != undefined) {
      this.voteService
        .getVote(this.answerId, this.userId)
        .toPromise()
        .catch((error) => {
          if (error.status == 418) {
            this.voteService
              .createAnswerVote({
                answerId: this.answerId,
                userId: this.userId,
                value: -1,
              })
              .subscribe((res) => {});
          }
        });
    }
  }
}
