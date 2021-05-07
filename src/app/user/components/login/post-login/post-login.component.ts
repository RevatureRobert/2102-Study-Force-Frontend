import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/models/user';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {

  // This class just takes the hash parameters from the authentication route and splits them, and then split the access_token and places it into localSotrage.

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    const fragment = route.snapshot.fragment;
    const [a, b, c] = fragment.split("&");
    const [key, value] = a.split("=");
    localStorage.setItem("access_token", value);
  }

  ngOnInit(): void {
    this.redirect();
  }

  redirect() {
    this.router.navigate(["/"]);
  }

  async getUserLoggedIn() {
    const user: Promise<User> = this.userService.getLoggedInUser();

    let userString = JSON.stringify(user);
    
    localStorage.setItem("loggedInUser", userString);
  }

}
