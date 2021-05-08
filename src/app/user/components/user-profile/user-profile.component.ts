import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Batch } from '../../models/batch';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  //todo replace with user in local storage
  user?:User
  isAdmin:boolean = false;
  isMe:boolean = false;
  id?:number;

  batches:Batch[] = [{
    id: 3,
    name: "2102 Enterprise",
    instructors: [{
      userId:5,
      email:"jomama@hotmail.gov",
      name:"Instructor Ted",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    }],
    users: [{
      userId:12,
      email:"jomama@hotmail.gov",
      name:"Member fffff",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    },{
      userId:32,
      email:"jomama@hotmail.gov",
      name:"John Doe",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    }],
    creationTime:new Date(1620310931740)
  },{
    id: 3,
    name: "2102 Super Cool Dev ops team that does Dev ops",
    instructors: [{
      userId:5,
      email:"jomama@hotmail.gov",
      name:"Instructor Ted",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    }],
    users: [{
      userId:12,
      email:"jomama@hotmail.gov",
      name:"Member fffff",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    },{
      userId:32,
      email:"jomama@hotmail.gov",
      name:"John Doe",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    }],
    creationTime:new Date(1620310931740)
  },{
    id: 3,
    name: "321654987541651 super dumn java script Enterprise batch that only works in JS",
    instructors: [{
      userId:5,
      email:"jomama@hotmail.gov",
      name:"Instructor Ted",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    }],
    users: [{
      userId:12,
      email:"jomama@hotmail.gov",
      name:"Member fffff",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    },{
      userId:32,
      email:"jomama@hotmail.gov",
      name:"John Doe",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    }],
    creationTime:new Date(1620310931740)
  }]

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = +params['id']
    })
  }

  ngOnInit(): void {
    //TODO remove this placeholder user
    let u:User = {
      userId:32,
        email:"jomama@hotmail.gov",
        name:"John Doe",
        active:true,
        subscribedStacktrace:true,
        subscribedFlashcard:true,
        authority:"ADMIN",
        registrationTime:new Date(1620310931740),
        lastLogin:new Date(1620310931740)
      };
    //TODO remove this placeholder user in local storage
    localStorage.setItem('loggedInUser', JSON.stringify(u));

    //TODO if no id param route to my profile?
    this.user = JSON.parse(localStorage.getItem('loggedInUser')!);
    this.isMe = (this.user?.userId == this.id);
    this.isAdmin = ((this.user?.authority == "ADMIN" || this.user?.authority == "SUPER_ADMIN") && !this.isMe);
  }
}
