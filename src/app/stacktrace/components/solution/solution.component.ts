import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solution } from '../../models/solution';
import { User } from '../../models/user';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

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

  constructor(private solutionService: SolutionService, private route: ActivatedRoute, private router: Router) { 
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
    this.getAllSolutionsByStacktraceId(this.route.snapshot.params.stacktraceId, 0, 5)
    this.LoggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  }

  getAllSolutionsByStacktraceId(stacktraceId: number, page: number, pageSize: number): void{
    this.solutionService.getAllSolutionsByStacktraceId(stacktraceId, 0, 5)
    .then((result: any) => this.solutions = result.content);
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
      // this.getAllSolutionsByStacktraceId();
    });
  }

}
