import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stacktrace } from 'src/app/stacktrace/models/stacktrace';
import { StacktraceService } from 'src/app/stacktrace/services/stacktrace.service';
import { Technology } from 'src/app/stacktrace/models/technology';

@Component({
  selector: 'app-new-stacktrace',
  templateUrl: './new-stacktrace.component.html',
  styleUrls: ['./new-stacktrace.component.css']
})
export class NewStacktraceComponent implements OnInit {
  stacktraceId!: number;
  // are we tracking User (creator)? Not sure...
  title!: string;
  body!: string;
  technology!: Technology;
  creationTime!: string;

  constructor(
    private stacktraceService: StacktraceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate() {
    // create a Stacktrace and send to the backend using the service
    let newStacktrace = {
      stacktraceId: this.stacktraceId,
      title: this.title,
      body: this.body,
      technology: this.technology,
      creationTime: this.creationTime
    }

    this.stacktraceService.addStacktrace(newStacktrace);
  }

}
