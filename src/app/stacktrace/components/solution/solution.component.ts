import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solution } from '../../models/solution';
import { Stacktrace } from '../../models/stacktrace';
import { User } from '../../models/user';
import { SolutionService } from '../../services/solution.service';
import { StacktraceService } from '../../services/stacktrace.service';

/**
 * Provides methods for the creation of potential solutions for a given stacktrace.
 */
@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  isAdmin = false;
  isCreator = false;
  stacktrace?: Stacktrace;

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

  /**
   * 
   * @param solutionService the solution service which holds all the endpoints we needed to save and dispay solutions
   * @param route from ActiveRoute used to save the stacktraceId from the url
   * @param stacktraceService the stacktrace service is used to update chosenSolution and generate a stacktrace to be dispayed
   */
  constructor(private solutionService: SolutionService, private route: ActivatedRoute, 
    private stacktraceService: StacktraceService) {
  }

  ngOnInit(): void {
    this.getAllSolutionsByStacktraceId()
    this.LoggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    this.getStacktrace();
  }

  /**
   * This method will delete a solution, should be a admin or creator of solution
   * @param solutionId the primary key of a solution which will be deleted
   */
  deleteSolution(solutionId: number): void{
    this.solutionService.deleteSolution(solutionId).subscribe(data =>{
      window.location.reload();
    });
  }

  /**
   * This method will return a stacktrace from the url using ActivatedRoute
   */
  getStacktrace(){
    this.stacktraceService.getStacktrace(this.route.snapshot.params.stacktraceId).subscribe(data=>{
      this.stacktrace = data;
      this.getUserPriviledges();
    });
  }

  /**
   * This sets the priviledges for a user to display deletion and for picking a solution
   */
  getUserPriviledges(): void {
    if( this.LoggedUser.authority === 'ADMIN'){
      this.isAdmin = true;
    };
    if(this.LoggedUser.userId === this.stacktrace?.userId){
      this.isCreator = true;
    }
  }

  /**
   * Event called by SolutionVote when a vote is made, signaling this compoenent to update the solutions.
   * Not implemented.
   */
  updateSolution() {
    this.getAllSolutionsByStacktraceId();
  }

  /**
   * This method copies the solutionId from a solution and save it to the stacktrace 
   * chosenSoltuion field which will display the chosen solution before any other.
   * @param solutionId 
   */
  chosenSolution(solutionId: number): void{
    this.stacktraceService.chosenSolution(solutionId, this.route.snapshot.params.stacktraceId).subscribe(data =>{
      window.location.reload();
    });
    
  }

  /**
   * This method is used to load every comment from the stacktrace selected.
   */
  getAllSolutionsByStacktraceId(): void{
    this.solutionService.getAllSolutionsByStacktraceId(this.route.snapshot.params.stacktraceId, this.page, this.pageSize)
        .then((result: any) => {
          this.solutions = result.content;
        });
  }

  /**
   * This method is used to submit a new solution for the displayed stacktrace.
   */
  postSolution(): void{
    if(this.body === ""){
      alert("Please type solution before submitting");
      console.log(this.createSolution);
      return;
    }
    this.createSolution.body = this.body;
    this.createSolution.userId = this.LoggedUser.userId;
    console.log(this.createSolution);
    this.solutionService.postSolution(this.createSolution).then(data =>{
      window.location.reload();
    });
  }

}
