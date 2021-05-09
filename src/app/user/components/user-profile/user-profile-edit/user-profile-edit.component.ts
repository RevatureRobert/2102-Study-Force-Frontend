import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user/models/user';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})

/**
 * component for a user to edit their user details
 */
export class UserProfileEditComponent implements OnInit {

  user!:User;
  isLoading:boolean = true;

  /**
   * @param userService
   * @param router
   */
  constructor(private userService:UserService, private router:Router) { }

  /**
   * Gets logged in user from localstorage
   */
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedInUser')!);
    this.isLoading = false;
  }

  /**
   * Routes to profile of loggedInUser in local storage
   */
  goBack(){
    this.router.navigate([`/profile/${this.user.userId}`])
  }

  /**
   * Updates user's details by calling updateUserName() and updateUserSubscriptions() in UserService
   * creates an alert if any error is encountered while trying to update user details
   */
  async saveUserDetails(){
    this.isLoading = true;
    try {
      await this.userService.updateUserName(this.user.name, this.user.userId).then(response => {
        this.user = JSON.parse(response);
      })
      await this.userService.updateUserSubscriptions(this.user.userId, this.user.subscribedFlashcard, this.user.subscribedStacktrace).then(response => {
        this.user = JSON.parse(response);
      })
      localStorage.setItem('loggedInUser', JSON.stringify(this.user));
      this.goBack();
    } catch (exception) {
      this.isLoading = false;
      alert("Error occured when saving changes. Please try again later.\n\nIf this issue persists, please contact support.")
    }
    this.isLoading = false;
  }
}
