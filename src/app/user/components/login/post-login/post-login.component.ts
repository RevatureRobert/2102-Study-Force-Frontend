import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionServiceService } from 'src/app/flashcard/service/subscriptionservice.service';
import { User } from 'src/app/user/models/user';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css'],
})
/**
 * Component is used to grab token and store in localStorage, and then uses the stored token to grab the user who just logged in
 * @author Steven Ceglarek
 */
export class PostLoginComponent implements OnInit {
  // This class just takes the hash parameters from the authentication route and splits them, and then split the access_token and places it into localSotrage.

  /**
   * Constructor which in this case grabs the hash paramentrs, which as the access_token in it and then splits it down until it has the actual access_token
   * and then stores that token into localStorage
   * @param route grabbing the hash parameters from url
   * @param router used to redirect to homepage after this component is done
   * @param userService to grab the user who just logged in
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private subscriptionService:SubscriptionServiceService
  ) {
    const fragment = route.snapshot.fragment;
    const [a] = fragment.split('&');
    const [key, value] = a.split('=');
    localStorage.setItem(key, value);
  }

  /**
   * These are ngOnInIt so that they get ran when this component is loaded up
   */

  async ngOnInit()  {
    await this.getUserLoggedIn();
    this.redirect();
  }

  /**
   * Redirects to the homepage
   */
   redirect() {
      this.router.navigate(['/flashcards']);
  }

  /**
   * Grabs the logged in user using the access_token and places that user into localStorge as a JSON string
   */
  async getUserLoggedIn() {
    await this.userService.getLoggedInUser().then((res) => {
      let u: User = res;
      let userString = JSON.stringify(u);
      localStorage.setItem('loggedInUser', userString);
      if(!this.subscriptionService.hasSubscription(u.userId)){
          this.subscriptionService.requestSubscription()
      }
    });
  }
}
