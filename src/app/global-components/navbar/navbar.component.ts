import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userId:number;
  constructor(private router:Router) {
    let u:User = JSON.parse(localStorage.getItem('loggedInUser')!);
    this.userId = u.userId;
   }

  ngOnInit(): void {
  }

  goToMyDetails(){
      this.router.navigate([`/profile/${this.userId}`])
  }

}




