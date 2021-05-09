import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  users: User[] = [
    {
      id: 4,
      name: 'Sam Daniel',
      email: 'sam081295@gmail.com',
      registrationDate: '10-02-2020',
      authority: 'Employee',
      activity: 'Active',
    },
    {
      id: 3,
      name: 'Billy Hitchcock',
      email: 'billy@wonderfizz.com',
      registrationDate: '03-12-2021',
      authority: 'Admin',
      activity: 'Active',
    },
    {
      id: 2,
      name: 'Kevin Bobby',
      email: 'kevin@aol.com',
      registrationDate: '08-01-2019',
      authority: 'Employee',
      activity: 'De-Activated',
    },
    {
      id: 5,
      name: 'Suzie Joe',
      email: 'suzie@yahoo.com',
      registrationDate: '02-28-2018',
      authority: 'Employee',
      activity: 'Active',
    },
    {
      id: 1,
      name: 'John William',
      email: 'johny@binance.com',
      registrationDate: '12-14-1995',
      authority: 'Employee',
      activity: 'Active',
    },
  ];

  //This checks if the dropdown is in focus
  yes: boolean = false;
  yesSort: boolean = false;
  sortDirectionDesc: boolean = true;
  sortDirectionAsc: boolean = false;

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
    switch (
      this.sortBy.toLowerCase
      //   case "name":
      //     this.users.sort((a:User, b:User) => a.);
      //
    ) {
    }
  }

  changeOrder() {
    if (this.sortDirectionDesc == false) {
      this.sortDirectionAsc = false;
      this.sortDirectionDesc = true;
    } else {
      this.sortDirectionAsc = true;
      this.sortDirectionDesc = false;
    }
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
    this.router.navigate(['user-details', userId]);
  }
}
