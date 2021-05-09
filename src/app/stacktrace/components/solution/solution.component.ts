import { Component, OnInit } from '@angular/core';
import { Solution } from '../../models/solution';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  solution?: Solution;

  constructor() { }

  ngOnInit(): void {
  }

}
