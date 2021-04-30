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
  pageSize: number = 10;
  page: number = 1;

  constructor(private stacktraceService: StacktraceService) { }

  ngOnInit(): void {
    this.getPageStacktrace();
  }

  ngOnChanges(): void {
    this.getPageStacktrace();
  }

  getPageStacktrace(): void {
    this.stacktraceService.getPageStacktrace(this.pageSize, this.page);
  }
}
