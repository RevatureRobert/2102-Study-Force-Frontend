import { Component, OnInit } from '@angular/core';
import {Stacktrace} from 'src/app/stacktrace/models/stacktrace';
import {StacktraceService} from 'src/app/stacktrace/services/stacktrace.service';


@Component({
  selector: 'app-stacktrace-list',
  templateUrl: './stacktrace-list.component.html',
  styleUrls: ['./stacktrace-list.component.css']
})
export class StacktraceListComponent implements OnInit {
  stacktraces : Stacktrace[] = [];
  currentStacktrace?: Stacktrace;
  currentIndex=-1;
  title = '';


  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];



  constructor(private stacktraceService:StacktraceService) { }

  ngOnInit(): void {
    this.retrieveStacktraces();
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveStacktraces(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.stacktraceService.findAll(params)
    .subscribe(
      response => {
        const { stacktraces, totalItems } = response;
        this.stacktraces = stacktraces;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
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





  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveStacktraces();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveStacktraces();
  }


  refreshList(): void {
    this.retrieveStacktraces();
    this.currentStacktrace = undefined;
    this.currentIndex = -1;
  }
}
