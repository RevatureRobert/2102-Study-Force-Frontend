import { Component, Input, OnInit } from '@angular/core';
import { Batch } from 'src/app/user/models/batch';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-user-profile-user-view',
  templateUrl: './user-profile-user-view.component.html',
  styleUrls: ['./user-profile-user-view.component.css']
})
export class UserProfileUserViewComponent implements OnInit {

  @Input() user?:User;
  @Input() batches?:Batch[];
  @Input() isMe?:boolean;

  constructor() { }

  ngOnInit(): void {
    let u:User = JSON.parse(localStorage.getItem('loggedInUser')!);
    if(u.userId == this.user?.userId){
      this.isMe = true;
    }
  }
}
