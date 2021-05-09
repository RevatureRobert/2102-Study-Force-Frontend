import { Component, Input, OnInit } from '@angular/core';
import { Solution } from '../../models/solution';
import { Vote } from '../../models/vote';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-solution-vote',
  templateUrl: './solution-vote.component.html',
  styleUrls: ['./solution-vote.component.css']
})
export class SolutionVoteComponent implements OnInit {

  @Input() solution!: Solution;
  vote: Vote = {
    solutionId: 0,
    value: 0
  };

  upVoteSource = "../../../assets/up doot unclicked.svg"
  downVoteSource = "../../../assets/down doot unclicked.svg"
  scoreColor = "color: var(--duskwood)"

  constructor(private solutionService: SolutionService) { }

  ngOnInit(): void {
    this.initializeVote();
  }

  initializeVote() {
    this.vote = {
      solutionId: this.solution.solutionId,
      value: 0
    };
  }

  upVote() {
    this.upVoteSource = "../../../assets/selectedupvote.svg"
    this.scoreColor = "color: var(--red-orange-juice)"
    this.vote!.value = 1;
    this.solutionService.addVote(this.vote, this.solution);
  }

  downVote() {
    this.downVoteSource = "../../../assets/selecteddownvote.svg"
    this.scoreColor = "color: var(--wizard-blue)"
    this.vote!.value = -1;
    this.solutionService.addVote(this.vote, this.solution);
  }
}
