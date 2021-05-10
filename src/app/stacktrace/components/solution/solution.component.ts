import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solution } from '../../models/solution';
import { User } from '../../models/user';
import { SolutionService } from '../../services/solution.service';
import { StacktraceService } from '../../services/stacktrace.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  isAdmin = false;

  LoggedUser: any;
  solutions?: Solution[];
  body: string = "";
  createSolution: Solution = {
    solutionId: 0,
    stackTraceId: + this.route.snapshot.params.stacktraceId,
    userId: 0,  //Change later to check for local storage
    userName: "", //Change later to check for local storage
    body: "",
    adminSelected: false,
    userSelected: true,
    totalVote: 0,
  };

  // pagination values
  page: number = 0;
  pageSize: number = 5;

  constructor(private solutionService: SolutionService, private route: ActivatedRoute, private router: Router, 
    private stacktraceService: StacktraceService) {
    let u:User = {
      userId:5,
        email:"jomama@hotmail.gov",
        name:"John Doe",
        active:false,
        subscribedStacktrace:true,
        subscribedFlashcard:true,
        authority:"USER",
        registrationTime:new Date(1620310931740),
        lastLogin:new Date(1620310931740)
      };
    //TODO remove this placeholder user in local storage
    localStorage.setItem('loggedInUser', JSON.stringify(u));
  }

  ngOnInit(): void {
    this.getAllSolutionsByStacktraceId()
    this.LoggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  }

  deleteSolution(solutionId: number): void{
    this.solutionService.deleteSolution(solutionId).subscribe();
  }

  getUserPriviledges(): void {
    if( this.LoggedUser.authority === 'ADMIN'){
      this.isAdmin = true;
    };
  }

  /**
   * Event called by SolutionVote when a vote is made, signaling this compoenent to update the solutions.
   */
  updateSolution() {
    this.getAllSolutionsByStacktraceId();
  }

  chosenSolution(solutionId: number): void{
    this.stacktraceService.chosenSolution(solutionId, this.route.snapshot.params.stacktraceId).subscribe();
    
  }

  getAllSolutionsByStacktraceId(): void{
    this.solutionService.getAllSolutionsByStacktraceId(this.route.snapshot.params.stacktraceId, this.page, this.pageSize)
        .then((result: any) => {
          this.solutions = result.content;

        });
  }

  /**
   * Finish this for post mapping
   */
  postSolution(): void{
    if(this.body === ""){
      alert("Please type solution before submitting");
      console.log(this.createSolution);
      return;
    }
    // this.solutionService.postSolution(this.createSolution)
    // .then();
    this.createSolution.body = this.body;
    this.createSolution.userId = this.LoggedUser.userId;
    console.log(this.createSolution);
    this.solutionService.postSolution(this.createSolution).then(data =>{
      window.location.reload();
    });
  }

}
