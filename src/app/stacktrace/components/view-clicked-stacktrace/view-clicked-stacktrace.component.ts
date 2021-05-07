import { Component, OnDestroy, OnInit } from '@angular/core';

import { StacktraceService } from '../../services/stacktrace.service'
import { Stacktrace } from '../../models/stacktrace'


@Component({
  selector: 'app-view-clicked-stacktrace',
  templateUrl: './view-clicked-stacktrace.component.html',
  styleUrls: ['./view-clicked-stacktrace.component.css']
})
export class ViewClickedStacktraceComponent implements OnInit, OnDestroy {

  stacktrace?: Stacktrace;
  currentUser?: User; // TODO: need getUser endpoint to fill this user with the appropriate user

  constructor(private stacktraceService: StacktraceService) {

  }

  ngOnInit(): void {

    // this.stacktraceService.getStacktrace(1)
    // .subscribe(
    //   data =>
    //   {
    //     this.stacktrace = data;
    //   }
    // )
  }

  //  TODO: unsubscribe
  ngOnDestroy(): void {

  }

  deleteStacktrace(id:number): void{
    this.stacktraceService.deleteStacktrace(id)
      .subscribe(
        data =>
        {

        }
      );
  }
}
