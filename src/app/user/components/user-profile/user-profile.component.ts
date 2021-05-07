import { Component, OnInit } from '@angular/core';
import { Batch } from '../../models/batch';
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
    active:true,
    subscribedStacktrace:true,
    subscribedFlashcard:true,
    authority:"USER",
    registrationTime:new Date(1620310931740),
    lastLogin:new Date(1620310931740)
  }

  batches:Batch[] = [{
    id: 3,
    name: "2102 Enterprise",
    instructors: [{
      id:5,
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
      id:12,
      email:"jomama@hotmail.gov",
      name:"Member fffff",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    },{
      id:32,
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
    name: "2102 Enterprise",
    instructors: [{
      id:5,
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
      id:12,
      email:"jomama@hotmail.gov",
      name:"Member fffff",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    },{
      id:32,
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
    name: "2102 Enterprise",
    instructors: [{
      id:5,
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
      id:12,
      email:"jomama@hotmail.gov",
      name:"Member fffff",
      active:true,
      subscribedStacktrace:true,
      subscribedFlashcard:true,
      authority:"USER",
      registrationTime:new Date(1620310931740),
      lastLogin:new Date(1620310931740)
    },{
      id:32,
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

  constructor() { }

  ngOnInit(): void {

  }

}
