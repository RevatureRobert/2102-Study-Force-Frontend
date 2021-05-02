import { Component, OnInit } from '@angular/core';

import { StacktraceService } from '../../services/stacktrace.service'
import { Stacktrace } from '../../models/stacktrace'

@Component({
  selector: 'app-view-clicked-stacktrace',
  templateUrl: './view-clicked-stacktrace.component.html',
  styleUrls: ['./view-clicked-stacktrace.component.css']
})
export class ViewClickedStacktraceComponent implements OnInit {

  stacktrace?: Stacktrace;

  constructor(private stacktraceService: StacktraceService) {

  }

  ngOnInit(): void {

    this.stacktraceService.getStacktrace(1)
    .subscribe(
      data =>
      {
        this.stacktrace = data;
      }
    )
  }

}
