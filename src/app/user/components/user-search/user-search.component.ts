import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.searchFor();
  }

  ngAfterViewInit() {
    this.searchFor();
  }

  users: User[] = [];

  //This checks if the dropdown is in focus
  yes: boolean = false;

  yesSort: boolean = false;
  sortDirectionDesc: boolean = true;
  sortDirectionAsc: boolean = false;
  currentIndex: number = 0;

  //change this value to the number of items you want on each table page
  pageSize: number = 10;

  sortBy: string = 'Sort By';

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

  changeFocusSort() {
    let parent = document.getElementById('Dropdown-Button-Sort');

    if (this.yesSort === false) {
      this.yesSort = true;
      parent!.style.setProperty('border-bottom-right-radius', '0px');
      parent!.style.setProperty('border-bottom-left-radius', '0px');
    } else {
      this.yesSort = false;
      parent!.style.setProperty('border-bottom-right-radius', '10px');
      parent!.style.setProperty('border-bottom-left-radius', '10px');
    }
  }

  changeSort(sort: string) {
    this.sortBy = sort;
    this.searchFor();
  }

  changeOrder() {
    if (this.sortDirectionDesc === false) {
      this.sortDirectionAsc = false;
      this.sortDirectionDesc = true;
    } else {
      this.sortDirectionAsc = true;
      this.sortDirectionDesc = false;
    }
    this.searchFor();
  }

  //If the dropdown loses focus, set the boolean to false.
  setFalse() {
    this.yes = false;
  }

  //If the dropdown loses focus, set the boolean to false.
  setFalseSort() {
    this.yesSort = false;
  }

  userDetails(userId: number) {
    this.router.navigate(['profile', userId]);
  }

  prevIndex: number = 0;

  getUserItems(i?: number) {
    if (i != undefined) {
      if (i == 0) {
        let parent5 = document.querySelectorAll<HTMLElement>('.page-link')[0];
        parent5.style.visibility = 'hidden';
      } else {
        let parent6 = document.querySelectorAll<HTMLElement>('.page-link')[0];
        parent6.style.visibility = 'visible';
      }

      if (i == this.getPagination().length - 1) {
        let parent3 =
          document.querySelectorAll<HTMLElement>('.page-link')[
            this.getPagination().length + 1
          ];
        parent3.style.visibility = 'hidden';
      } else {
        let parent4 =
          document.querySelectorAll<HTMLElement>('.page-link')[
            this.getPagination().length + 1
          ];
        parent4.style.visibility = 'visible';
      }

      let parent =
        document.querySelectorAll<HTMLElement>('.page-link')[
          this.prevIndex + 1
        ];
      parent.style.setProperty('background-color', '');

      this.prevIndex = i;
      // this.currentIndex = i * this.pageSize;

      let parent2 = document.querySelectorAll<HTMLElement>('.page-link')[i + 1];
      parent2.style.setProperty('background-color', 'blue');
    }
  }

  getPagination() {
    let pagination = new Array<number>(this.totalPages);
    return pagination;
  }

  totalPages: number = 0;
  pageNumber: number = 0;
  searchFor(pageNum?: number) {
    if (pageNum != undefined) {
      this.pageNumber = pageNum;
    }

    let searchValue = (<HTMLInputElement>(
      document.getElementById('Search-Input')
    )).value;

    let dir: string = 'asc';

    if (this.sortDirectionDesc === false) {
      dir = 'desc';
    }

    this.userService
      .searchUsers(
        searchValue,
        this.pageNumber,
        this.pageSize,
        this.sortBy.toLowerCase(),
        dir
      )
      .then((response) => {
        this.users = response.content;
        this.totalPages = response.totalPages;
        this.pageNumber = response.pageable.pageNumber;
        if (this.totalPages > 1) {
          document
            .getElementById('Nav-Container')!
            .style.setProperty('display', '');
          this.getPagination();
          this.getUserItems(this.pageNumber);
        } else {
          document
            .getElementById('Nav-Container')!
            .style.setProperty('display', 'none');
        }
      });
  }
}
