import { Component, OnDestroy, OnInit } from '@angular/core';

import { StacktraceService } from '../../services/stacktrace.service'
import { Stacktrace } from '../../models/stacktrace'
import { StacktraceUser } from '../../models/user'

@Component({
  selector: 'app-stacktrace',
  templateUrl: './stacktrace.component.html',
  styleUrls: ['./stacktrace.component.css']
})
export class StacktraceComponent implements OnInit, OnDestroy {

  stacktrace?: Stacktrace;
  currentUser?: StacktraceUser; // TODO: need getUser endpoint to fill this user with the appropriate user

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
