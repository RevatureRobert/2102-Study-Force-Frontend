import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StacktraceService } from '../../services/stacktrace.service'
import { Stacktrace } from '../../models/stacktrace'
import { Solution } from '../../models/solution';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-stacktrace',
  templateUrl: './stacktrace.component.html',
  styleUrls: ['./stacktrace.component.css']
})
export class StacktraceComponent implements OnInit {

  currentStacktrace!: Stacktrace;

  constructor(private stacktraceService: StacktraceService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getStacktrace(this.route.snapshot.params.stacktraceId);
  }

  getStacktrace(stacktraceId: string): void {
    this.stacktraceService.getStacktrace(stacktraceId)
      .subscribe(
        data => {
          this.currentStacktrace = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
