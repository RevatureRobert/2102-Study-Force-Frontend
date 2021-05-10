import { Component, OnInit } from '@angular/core';
import { StacktraceService } from '../../services/stacktrace.service';
import { Stacktrace } from '../../models/stacktrace';
import { TechnologyService } from '../../services/technology.service';
import { Technology } from '../../models/technology';
import { Router } from '@angular/router';
import { User } from '../../models/user';

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
  technologyId: number = 1;
  technology: Technology[] = [];
  currentIndex=-1;
  title = '';
  isAdmin = false;
  page = 0;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  LoggedUser: any;

  constructor(private stacktraceService:StacktraceService, private technologyService: TechnologyService, private router: Router) {
    // //TODO remove this placeholder user
    //     let u:User = {
    //       userId:32,
    //         email:"jomama@hotmail.gov",
    //         name:"John Doe",
    //         active:false,
    //         subscribedStacktrace:true,
    //         subscribedFlashcard:true,
    //         authority:"ADMIN",
    //         registrationTime:new Date(1620310931740),
    //         lastLogin:new Date(1620310931740)
    //       };
    //     //TODO remove this placeholder user in local storage
    //     localStorage.setItem('loggedInUser', JSON.stringify(u));
        // console.log(localStorage.getItem("loggedInUser"));
   }
    
  ngOnInit(): void {
    this.retrieveStacktraces();
    this.getAllTechnology();
    this.LoggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    this.getUserPriviledges();
  }

  getUserPriviledges(): void {
    if( this.LoggedUser.authority === 'ADMIN'){
      this.isAdmin = true;
    };
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

  getAllTechnology(){
    this.technologyService.getAllTechnology().then(
      data =>{
        this.technology = data;
        this.technologyId = this.technology[0].technologyId || 1;
      }
    )
  }

  retrieveStacktracesByTechnology(technologyId: number): void {
    this.technologyId = technologyId;
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    console.log(this.technologyId)
    console.log(this.title)
    this.stacktraceService.findByTitleAndTechnology(this.title, this.technologyId, this.page)
    .subscribe(
      response => {
        const { stacktraces, totalItems } = response;
        this.stacktraces = response.content;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  retrieveStacktraces(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.stacktraceService.findAll(params)
    .subscribe(
      response => {
        const { stacktraces, totalItems } = response;
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
}
