import { Component, OnInit } from '@angular/core';
import { StacktraceService } from '../../services/stacktrace.service';
import { Stacktrace } from '../../models/stacktrace';
import { TechnologyService } from '../../services/technology.service';
import { Technology } from '../../models/technology';
import { Router } from '@angular/router';

/**
 * A component that displays a paginated table of Stacktraces, TODO: Stacktraces can be filtered by technology and search term
 */
@Component({
  selector: 'app-stacktrace-home',
  templateUrl: './stacktrace-home.component.html',
  styleUrls: ['./stacktrace-home.component.css']
})
export class StacktraceHomeComponent implements OnInit {
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
        this.stacktraces = response.content;
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
