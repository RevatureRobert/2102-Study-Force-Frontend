import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Solution } from '../../models/solution';
import { User } from '../../models/user';
import { Vote } from '../../models/vote';
import { SolutionService } from '../../services/solution.service';

/**
 * Provides methods for updating and creation solution votes for any given solution.
 */
@Component({
  selector: 'app-solution-vote',
  templateUrl: './solution-vote.component.html',
  styleUrls: ['./solution-vote.component.css']
})
export class SolutionVoteComponent implements OnInit {
  LoggedUser: any;//loads in the logged in users values
  error?: string;
  isError = false;

  @Input() solution!: Solution;
  vote: Vote = {
    solutionId: 0,
    value: 0,
    userId: 0
  };

  upVoteSource = "../../../assets/up doot unclicked.svg"
  downVoteSource = "../../../assets/down doot unclicked.svg"
  scoreColor = "color: var(--duskwood)"
  /**
   * 
   * @param solutionService used to updated total votes for a solution or create solution votes
   */
  constructor(private solutionService: SolutionService) {
   }

  ngOnInit(): void {
    this.LoggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    this.initializeVote();
  }

  isErrorTrue(): void{
    if(this.error === 'You have already voted on that solution.')
    this.isError = true;
  }

  /**
   * This method is used to load the values to be passed for the creation of a solution vote.
   */
  initializeVote() {
    this.vote = {
      solutionId: this.solution.solutionId,
      value: 0,
      userId: this.LoggedUser.userId
    };
  }

  /**
   * This method is used to give a positive vote for a solution
   * then update the total vote for the solution.
   * The error message is used to catch the duplicate key constraint 
   * so you can only upvote once per solution.
   */
  upVote() {
    this.upVoteSource = "../../../assets/selectedupvote.svg"
    this.scoreColor = "color: var(--red-orange-juice)"
    this.vote!.value = 1;
    this.solutionService.addVote(this.vote).subscribe(data => {
      this.solutionService.updateVote(this.solution).subscribe(solution => {this.solution = solution});
  },
    errorMessage => {
    this.error = errorMessage;
  });};

  /**
   * This method is used to give a negative vote for any given soltuion
   * then update the total solution vote for that given solution.
   * The error message is used to catch the duplicate key constraint 
   * so you can only upvote once per solution.
   */
  downVote() {
    this.downVoteSource = "../../../assets/selecteddownvote.svg"
    this.scoreColor = "color: var(--wizard-blue)"
    this.vote!.value = -1;
    this.solutionService.addVote(this.vote).subscribe(data => {
      this.solutionService.updateVote(this.solution).subscribe(solution => {this.solution = solution});
  },
    errorMessage => {
    this.error = errorMessage;
  });};

}
