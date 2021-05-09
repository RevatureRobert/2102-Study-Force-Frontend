import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solution } from '../../models/solution';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  solutions?: Solution[];
  body: string = "";
  createSolution: Solution = {
    solutionId: 0,
    stacktraceId: this.route.snapshot.params.stacktraceId,
    userId: 0,  //Change later to check for local storage
    userName: "", //Change later to check for local storage
    body: "",
    adminSelected: false,
    userSelected: true,
    creationTime: "",
    totalVote: 0,
  };

  constructor(private solutionService: SolutionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllSolutionsByStacktraceId(this.route.snapshot.params.stacktraceId, 0, 5)
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
    this.solutionService.postSolution(this.createSolution);
  }
}
