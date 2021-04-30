import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-stacktrace',
  templateUrl: './new-stacktrace.component.html',
  styleUrls: ['./new-stacktrace.component.css']
})
export class NewStacktraceComponent implements OnInit {

  constructor(
    // need some kind of StacktraceService here...
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate() {
    // create a Stacktrace and send to the backend using the service
    // (will also need a Stacktrace model...)
  }

}
