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

  constructor() { }

  ngOnInit(): void {
  }

  upVote() {
    this.upVoteSource = "../../../assets/selected up doot.svg"
    this.scoreColor = "color: var(--red-orange-juice)"
  }

  downVote() {
    this.downVoteSource = "../../../assets/selected down doot.svg"
    this.scoreColor = "color: var(--sapphire-splendor)"
  }

}
