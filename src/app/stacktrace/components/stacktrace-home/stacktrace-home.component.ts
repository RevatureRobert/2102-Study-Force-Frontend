import { Component, OnInit } from '@angular/core';
import { StacktraceService } from '../../services/stacktrace.service';
import { Stacktrace } from '../../models/stacktrace';
import { TechnologyService } from '../../services/technology.service';
import { Technology } from '../../models/technology';
import { Router } from '@angular/router';
import { User } from '../../models/user';

/**
 * A component that displays a paginated table of Stacktraces
 */
@Component({
  selector: 'app-stacktrace-home',
  templateUrl: './stacktrace-home.component.html',
  styleUrls: ['./stacktrace-home.component.css']
})
export class StacktraceHomeComponent implements OnInit {
  stacktraces : Stacktrace[] = [];
  currentStacktrace?: Stacktrace;
  technologyId: number = 1;
  technology: Technology[] = [];
  currentIndex=-1;
  title = '';
  isAdmin = false;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  LoggedUser: any;
  searchTitleOnly: boolean = true;
  page: number = 0;
  totalPages:number = 0;

  constructor(private stacktraceService:StacktraceService, private technologyService: TechnologyService, private router: Router) {
    let u:User = {
      userId:2,
        email:"jomama@hotmail.gov",
        name:"John Doe",
        active:false,
        subscribedStacktrace:true,
        subscribedFlashcard:true,
        authority:"ADMIN",
        registrationTime:new Date(1620310931740),
        lastLogin:new Date(1620310931740)
      };
    //TODO remove this placeholder user in local storage
    localStorage.setItem('loggedInUser', JSON.stringify(u));
   }

  ngOnInit(): void {
    this.retrieveStacktraces();
    this.getAllTechnology();
    this.LoggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    this.getUserPriviledges();
  }

/**
 * Gets the authority of the currently active user
 */

  getUserPriviledges(): void {
    if( this.LoggedUser.authority === 'ADMIN'){
      this.isAdmin = true;
    };
  }

/**
 * Converts variables into http request params
 */

  getRequestParams(searchTitle: string, page: number, pageSize: number, searchTechnologyId?: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchTechnologyId) {
      params[`technologyId`] = searchTechnologyId;
    }

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    return params;
  }

/**
 * Retrieves a list of all technology from the database
 */

  getAllTechnology(){
    this.technologyService.getAllTechnology().then(
      data =>{
        this.technology = data;
        this.technologyId = this.technology[0].technologyId || 1;
      }
    )
  }

/**
 * Retrieves a list of stack traces with the given title and technology Id
 */

  retrieveStacktracesByTechnology(technologyId: number): void {
    this.searchTitleOnly = false;
    this.technologyId = technologyId;
    const params = this.getRequestParams(this.title, this.page, this.pageSize, this.technologyId);
    this.stacktraceService.findByTitleAndOrTechnology(params)
    .subscribe(
      response => {
        this.stacktraces = response.content;
        this.totalPages = response.totalPages;
      },
      error => {
        console.log(error);
      });
  }

/**
 * Retrieves all stack traces
 */

  retrieveStacktraces(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.stacktraceService.findAll(params)
    .subscribe(
      response => {
        this.stacktraces = response.content;
        this.totalPages = response.totalPages;
      },
      error => {
        console.log(error);
      });
  }

/**
 * Retrieves a list of stack traces with the given title
 */

  retrieveStacktracesByTitle(): void {
  const params = this.getRequestParams(this.title, this.page, this.pageSize);
   this.stacktraceService.findByTitleAndOrTechnology(params)
      .subscribe(
        response => {
          const { stacktraces, totalItems } = response;
          this.stacktraces = response.content;
          this.count = totalItems;
        },
        error => {
          console.log(error);
        });
  }

/**
 * Handles the search button
 */

  onSearchButtonPress(): void {
    if (this.searchTitleOnly) {
      this.retrieveStacktracesByTitle();
    } else {
      this.retrieveStacktracesByTechnology(this.technologyId);
        }
  }

  yes: boolean = false;

  //If the dropdown button is clicked this will provide functionallity to style the button based on the button click.
  changeFocus() {
    let parent = document.getElementById('Dropdown-Button');

    if (this.yes === false) {
      this.yes = true;
      parent!.style.setProperty('border-bottom-right-radius', '0px');
      parent!.style.setProperty('border-bottom-left-radius', '0px');
    } else {
      this.yes = false;
      parent!.style.setProperty('border-bottom-right-radius', '10px');
      parent!.style.setProperty('border-bottom-left-radius', '10px');
    }
  }

  //If the dropdown loses focus, set the boolean to false.
  setFalse() {
    this.yes = false;
  }

  gotoStacktraceList(stacktraceId: number) {
    this.router.navigate([`/stacktraces/${stacktraceId}`]);
  }

  /**
   * Handles pagination
   */

  prevPage(): void{
    this.page--;
    if (this.title === '' && this.searchTitleOnly) {
      const params = this.getRequestParams(this.title, this.page, this.pageSize);
      this.stacktraceService.findAll(params).subscribe(data => this.stacktraces = data.content)
    }
    else if (this.searchTitleOnly) {
      const params = this.getRequestParams(this.title, this.page, this.pageSize);
      this.stacktraceService.findByTitleAndOrTechnology(params).subscribe(data => this.stacktraces = data.content);
    } else {
      const params = this.getRequestParams(this.title, this.page, this.pageSize, this.technologyId);
      this.stacktraceService.findByTitleAndOrTechnology(params).subscribe(data => this.stacktraces = data.content);
    }
  }

  /**
   * Handles pagination
   */

  nextPage(): void{
    this.page++;
    console.log(this.page);
    if (this.title === '' && this.searchTitleOnly) {
      const params = this.getRequestParams(this.title, this.page, this.pageSize);
      this.stacktraceService.findAll(params).subscribe( data => this.stacktraces = data.content);
    }
    else if (this.searchTitleOnly) {
      const params = this.getRequestParams(this.title, this.page, this.pageSize);
      this.stacktraceService.findByTitleAndOrTechnology(params).subscribe(data => this.stacktraces = data.content);
    } else {
      const params = this.getRequestParams(this.title, this.page, this.pageSize, this.technologyId);
      this.stacktraceService.findByTitleAndOrTechnology(params).subscribe(data => this.stacktraces = data.content);
    }
  }
}
