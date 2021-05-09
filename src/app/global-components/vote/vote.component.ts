import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/flashcard/model/answer';
import { Vote } from 'src/app/flashcard/model/vote';
import { textChangeRangeIsUnchanged } from 'typescript';
import { VoteService } from "../../flashcard/service/vote.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {


  @Input() answer!: Answer;
  @Input() answerId!: number;
  answerScore: number = 0;
  TEST = "DEFAULT";
  @Input() userId!: number;

  upVoteSource = "../../../assets/up doot unclicked.svg"
  downVoteSource = "../../../assets/down doot unclicked.svg"
  scoreColor = "color: var(--duskwood)"

  hasVoted = false;

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {

    this.voteService.getAllVotes(this.answerId).subscribe(
      res => {
        for (let vote of res) {
          // console.log(vote);

          this.answerScore += vote.value;
        }

      }
    )

    this.hasVoted = true;
    if (this.answerId != undefined) {
      let error418: boolean = false;


      this.voteService.getVote(this.answerId, this.userId).toPromise().catch(error => {
        console.log("STATUS: " + error.status);

        if (error.status == 418) {
          console.log("ERROR: " + error.status);

          error418 = true;
        }}).then(res => {
          if (error418) {
            this.hasVoted = false;
          } else {
            this.hasVoted = true;
          }
          // console.log("ID: " + this.answerId + ", HASVOTED: " + this.hasVoted);
        });

    }

  }

  upVote() {

    this.upVoteSource = "../../../assets/selectedupvote.svg";
    this.scoreColor = "color: var(--red-orange-juice)";
    this.hasVoted =  true;
    // This will be removed once the userId is correct
    this.answerScore += 1;

    if (this.answerId != undefined) {

      this.voteService.getVote(this.answerId, this.userId).toPromise().catch(error => {
        if (error.status == 418) {
          this.voteService.createAnswerVote({answerId: this.answerId, userId: this.userId, value: 1}).subscribe(
            res => {
              // console.log(res);

            }
          );
        }
      })

    }

  }

  downVote() {
    this.upVoteSource = "../../../assets/selectedupvote.svg";
    this.scoreColor = "color: var(--red-orange-juice)";
    this.hasVoted =  true;
    // This will be removed once the userId is correct
    this.answerScore -= 1;

    if (this.answerId != undefined) {

      this.voteService.getVote(this.answerId, this.userId).toPromise().catch(error => {
        if (error.status == 418) {
          this.voteService.createAnswerVote({answerId: this.answerId, userId: this.userId, value: -1}).subscribe(
            res => {
              // console.log(res);

            }
          );
        }
      })

    }
  }

}
