import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Solution } from '../../models/solution';
import { User } from '../../models/user';
import { Vote } from '../../models/vote';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-solution-vote',
  templateUrl: './solution-vote.component.html',
  styleUrls: ['./solution-vote.component.css']
})
export class SolutionVoteComponent implements OnInit {
  LoggedUser: any;

  @Input() solution!: Solution;
  vote: Vote = {
    solutionId: 0,
    value: 0,
    userId: 0
  };

  upVoteSource = "../../../assets/up doot unclicked.svg"
  downVoteSource = "../../../assets/down doot unclicked.svg"
  scoreColor = "color: var(--duskwood)"

  constructor(private solutionService: SolutionService) {
    // let u:User = {
    //   userId:2,
    //     email:"jomama@hotmail.gov",
    //     name:"John Doe",
    //     active:false,
    //     subscribedStacktrace:true,
    //     subscribedFlashcard:true,
    //     authority:"USER",
    //     registrationTime:new Date(1620310931740),
    //     lastLogin:new Date(1620310931740)
    //   };
    // //TODO remove this placeholder user in local storage
    // localStorage.setItem('loggedInUser', JSON.stringify(u));
   }

  ngOnInit(): void {
    this.LoggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    this.initializeVote();
  }

  initializeVote() {
    this.vote = {
      solutionId: this.solution.solutionId,
      value: 0,
      userId: this.LoggedUser.userId
    };
  }

  upVote() {
    this.upVoteSource = "../../../assets/selectedupvote.svg"
    this.scoreColor = "color: var(--red-orange-juice)"
    this.vote!.value = 1;
    this.solutionService.addVote(this.vote).subscribe(data => {
      this.solutionService.updateVote(this.solution).subscribe(solution => {this.solution = solution});

    });
  }

  downVote() {
    this.downVoteSource = "../../../assets/selecteddownvote.svg"
    this.scoreColor = "color: var(--wizard-blue)"
    this.vote!.value = -1;
    this.solutionService.addVote(this.vote).subscribe(data => {
      this.solutionService.updateVote(this.solution).subscribe(solution => {this.solution = solution});
    });
  }
}
