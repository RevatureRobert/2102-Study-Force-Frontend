import { Component, OnInit } from '@angular/core';
import {Stacktrace} from 'src/app/stacktrace/models/stacktrace';
import {StacktraceService} from 'src/app/stacktrace/services/stacktrace.service';


@Component({
  selector: 'app-stacktrace-list',
  templateUrl: './stacktrace-list.component.html',
  styleUrls: ['./stacktrace-list.component.css']
})
export class StacktraceListComponent implements OnInit {

  stacktraces ?: Stacktrace[];
  currentStacktrace?: Stacktrace;
  currentIndex=-1;
  title = "";



  constructor(private stacktraceService:StacktraceService) { }

  ngOnInit(): void {
    this.stacktraceService.findAll().subscribe(data => {
      this.stacktraces = data;
    });
  }

  setActiveStacktrace( stacktrace:Stacktrace, index :number) : void{
    this.currentStacktrace = stacktrace;
    this.currentIndex=index;
  }


  searchTitle(): void {
   this.stacktraceService.findByTitle(this.title)
      .subscribe(
        data => {
          this.stacktraces = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
