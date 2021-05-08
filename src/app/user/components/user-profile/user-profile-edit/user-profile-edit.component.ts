import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  @Input() user?:User;

  constructor() { }

  ngOnInit(): void {
  }

  saveUserDetails(){
    
  }
}
