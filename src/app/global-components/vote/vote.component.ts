import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  upVoteSource = "../../../assets/up doot unclicked.svg"
  downVoteSource = "../../../assets/down doot unclicked.svg"
  scoreColor = "color: var(--duskwood)"

  hasVoted=false;

  constructor() { }

  ngOnInit(): void {
  }

  upVote() {
    this.upVoteSource = "../../../assets/selectedupvote.svg"
    this.scoreColor = "color: var(--peachy-feeling)"
  }

  downVote() {
    this.downVoteSource = "../../../assets/selecteddownvote.svg"
    this.scoreColor = "color: var(--wizard-blue)"
  }

}
