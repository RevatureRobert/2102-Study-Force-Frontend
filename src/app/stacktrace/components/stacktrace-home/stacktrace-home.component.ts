import { Component, OnInit } from '@angular/core';
import { StacktraceService } from '../../services/stacktrace.service';
import { Stacktrace } from '../../models/stacktrace';

@Component({
  selector: 'app-stacktrace-home',
  templateUrl: './stacktrace-home.component.html',
  styleUrls: ['./stacktrace-home.component.css']
})
export class StacktraceHomeComponent implements OnInit {
  stacktraces: Stacktrace[] = [];
  pageSize: number = 25;
  pageNumber: number = 0;

  constructor(private stacktraceService: StacktraceService) { }

  ngOnInit(): void {
    this.getPageStacktrace(25, 0);
  }

  getPageStacktrace(pageSize:number, pageNumber:number): void {
    this.stacktraceService.getPageStacktrace(pageSize, pageNumber);
  }
}
