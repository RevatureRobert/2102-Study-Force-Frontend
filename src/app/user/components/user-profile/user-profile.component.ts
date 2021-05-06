import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  //todo replace with user in local storage
  user:User = {
    id:32,
    email:"jomama@hotmail.gov",
    name:"John Doe",
    isActive:true,
    isSubscribedFlashcard:true,
    isSubscribedStacktrace:true,
    authority:"USER",
    registrationTime:1620310931740,
    lastLogin:1620313931740
  }

  registrationDate = new Date(this.user.registrationTime)

  constructor() { }

  ngOnInit(): void {

  }

}
