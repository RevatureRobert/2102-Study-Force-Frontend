import { Component, OnInit, Input } from '@angular/core';
import { Batch } from 'src/app/user/models/batch';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-user-profile-admin-view',
  templateUrl: './user-profile-admin-view.component.html',
  styleUrls: ['./user-profile-admin-view.component.css']
})
export class UserProfileAdminViewComponent implements OnInit {

  @Input() user?:User;
  @Input() batches?:Batch[];
  editMode:boolean = false;

  yes: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let u:User = JSON.parse(localStorage.getItem('loggedInUser')!);
  }

  setUserActive(active:boolean){

  }

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

  setFalse() {
    this.yes = false;
  }
}
