import { Component, OnInit } from '@angular/core';
import { Solution } from '../../models/solution';
import { SolutionService } from '../../services/solution.service'

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  solutions: Solution[] = [];
  page?: number;
  pageSize?: number;

  constructor(private solutionService: SolutionService) {}

  ngOnInit(): void {
    this.getAllSolutions(1, 0, 5);
  }

  getAllSolutions(stacktraceId: number, page: number, pageSize: number): void{
      this.solutionService.getAllSolutions(stacktraceId, page, pageSize)
      .then(
        (response: any) => this.solutions = response.content);
  }
}
