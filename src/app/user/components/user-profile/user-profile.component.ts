import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Batch } from '../../models/batch';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  user?:User
  isAdmin:boolean = false;
  isMe:boolean = false;
  id?:number;
  isLoading:boolean = true;

  //TODO replace with service call that gets batches once that endpoint is finished
  batches?:Batch[];
  // = [{
  //   batchId: 3,
  //   name: "2102 Enterprise",
  //   instructors: [{
  //     userId:5,
  //     email:"jomama@hotmail.gov",
  //     name:"Instructor Ted",
  //     active:true,
  //     subscribedStacktrace:true,
  //     subscribedFlashcard:true,
  //     authority:"USER",
  //     registrationTime:new Date(1620310931740),
  //     lastLogin:new Date(1620310931740)
  //   }],
  //   users: [{
  //     userId:12,
  //     email:"jomama@hotmail.gov",
  //     name:"Member fffff",
  //     active:true,
  //     subscribedStacktrace:true,
  //     subscribedFlashcard:true,
  //     authority:"USER",
  //     registrationTime:new Date(1620310931740),
  //     lastLogin:new Date(1620310931740)
  //   },{
  //     userId:32,
  //     email:"jomama@hotmail.gov",
  //     name:"John Doe",
  //     active:true,
  //     subscribedStacktrace:true,
  //     subscribedFlashcard:true,
  //     authority:"USER",
  //     registrationTime:new Date(1620310931740),
  //     lastLogin:new Date(1620310931740)
  //   }],
  //   creationTime:new Date(1620310931740)
  // },{
  //   batchId: 3,
  //   name: "2102 Super Cool Dev ops team that does Dev ops",
  //   instructors: [{
  //     userId:5,
  //     email:"jomama@hotmail.gov",
  //     name:"Instructor Ted",
  //     active:true,
  //     subscribedStacktrace:true,
  //     subscribedFlashcard:true,
  //     authority:"USER",
  //     registrationTime:new Date(1620310931740),
  //     lastLogin:new Date(1620310931740)
  //   }],
  //   users: [{
  //     userId:12,
  //     email:"jomama@hotmail.gov",
  //     name:"Member fffff",
  //     active:true,
  //     subscribedStacktrace:true,
  //     subscribedFlashcard:true,
  //     authority:"USER",
  //     registrationTime:new Date(1620310931740),
  //     lastLogin:new Date(1620310931740)
  //   },{
  //     userId:32,
  //     email:"jomama@hotmail.gov",
  //     name:"John Doe",
  //     active:true,
  //     subscribedStacktrace:true,
  //     subscribedFlashcard:true,
  //     authority:"USER",
  //     registrationTime:new Date(1620310931740),
  //     lastLogin:new Date(1620310931740)
  //   }],
  //   creationTime:new Date(1620310931740)
  // },{
  //   batchId: 3,
  //   name: "321654987541651 super dumn java script Enterprise batch that only works in JS",
  //   instructors: [{
  //     userId:5,
  //     email:"jomama@hotmail.gov",
  //     name:"Instructor Ted",
  //     active:true,
  //     subscribedStacktrace:true,
  //     subscribedFlashcard:true,
  //     authority:"USER",
  //     registrationTime:new Date(1620310931740),
  //     lastLogin:new Date(1620310931740)
  //   }],
  //   users: [{
  //     userId:12,
  //     email:"jomama@hotmail.gov",
  //     name:"Member fffff",
  //     active:true,
  //     subscribedStacktrace:true,
  //     subscribedFlashcard:true,
  //     authority:"USER",
  //     registrationTime:new Date(1620310931740),
  //     lastLogin:new Date(1620310931740)
  //   },{
  //     userId:32,
  //     email:"jomama@hotmail.gov",
  //     name:"John Doe",
  //     active:true,
  //     subscribedStacktrace:true,
  //     subscribedFlashcard:true,
  //     authority:"USER",
  //     registrationTime:new Date(1620310931740),
  //     lastLogin:new Date(1620310931740)
  //   }],
  //   creationTime:new Date(1620310931740)
  // }]

  constructor(private route:ActivatedRoute, private userService:UserService) {
    this.route.params.subscribe(params => {
      this.id = +params['id']
    })
  }

  async ngOnInit() {
    this.isLoading = true;

    await this.populateUserProfileOrDefault();

    this.isMe = (this.user?.userId == this.id);
    this.isAdmin = ((this.user?.authority == "ADMIN" || this.user?.authority == "SUPER_ADMIN") && !this.isMe);
    this.isLoading = false;
  }

  async populateUserProfileOrDefault(){
    try {
      await this.userService.getUserByUserId(this.id!).then(response => {
        this.user = JSON.parse(response);
      })
    } catch(exception) {
      this.user = JSON.parse(localStorage.getItem('loggedInUser')!);
    }
  }
}
