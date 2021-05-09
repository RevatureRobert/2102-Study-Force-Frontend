import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Batch } from 'src/app/user/models/batch';
import { User } from 'src/app/user/models/user';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-user-profile-admin-view',
  templateUrl: './user-profile-admin-view.component.html',
  styleUrls: ['./user-profile-admin-view.component.css']
})
export class UserProfileAdminViewComponent implements OnInit {

  @Input() user?:User;
  @Input() batches?:Batch[];
  editMode:boolean = false;
  isLoading:boolean = true;
  userVisible:boolean = true;
  adminVisible:boolean = false;
  superAdminVisible:boolean = false;
  activateVisible:boolean = false;

  yes:boolean = false;

  constructor(private userService:UserService, private router:Router) { }

  /**
   * Performs checks to see what this admin is able to edit depending
   * on their authority and the authority of the user's profile theyre viewing
   */
  ngOnInit(): void {
    let u:User = JSON.parse(localStorage.getItem('loggedInUser')!)

    if(u.authority == 'ADMIN'){
      this.userVisible = true;
      this.adminVisible = true;
      this.superAdminVisible = false;
      this.activateVisible = true;

    } else if(u.authority == 'SUPER_ADMIN') {
      this.userVisible = true;
      this.adminVisible = true;
      this.superAdminVisible = true;
      this.activateVisible = true;
    }

    if((u.authority == 'ADMIN' && (this.user?.authority == 'ADMIN' || this.user?.authority == 'SUPER_ADMIN'))
     || (u.authority == 'SUPER_ADMIN' && this.user?.authority == 'SUPER_ADMIN')) {

      this.userVisible = false;
      this.adminVisible = false;
      this.superAdminVisible = false;
      this.activateVisible = !this.user?.active;
    }

    this.isLoading = false;
  }

  /**
   * Sets the user's active status using updateUserActive in UserService
   * @param active The user's new active status
   */
  async setUserActive(active:boolean){
    if(confirm(`Are you sure you want to change this user's active status?`)){
      this.isLoading = true;

      try {
        await this.userService.updateUserActive(active, this.user!.userId).then(response => {
          this.user = JSON.parse(response);
        })
        this.goBack();
        this.isLoading = false;

      } catch (exception) {
        alert("Error occured when saving changes. Please try again later.\n\nIf this issue persists, please contact support.")
        this.isLoading = false;
      }
      this.isLoading = false;
    }
  }

  /**
   * Sets the user's authority using updateUserAuthority() in UserService
   * @param authority The users new authority
   */
  async setUserAuthority(authority:string){
    if(confirm(`Are you sure you want to give\n\n${this.user?.name}\n\nthe authority of\n\n${authority}?`)){
      this.isLoading = true;

      try {
        await this.userService.updateUserAuthority(authority, this.user!.userId).then(response => {
          this.user = JSON.parse(response);
        })
        this.goBack();
        this.isLoading = false;

      } catch (exception) {
        alert("Error occured when saving changes. Please try again later.\n\nIf this issue persists, please contact support.")
        this.isLoading = false;
      }
      this.isLoading = false;
    }
  }

  /**
   * Routes to the profile of this user
   */
   goBack(){
    this.router.navigate([`/profile/${this.user?.userId}`])
  }

  /**
   * Function from drop down menu's styling, ensures proper visual formatting
   */
  changeFocus() {
    let parent = document.getElementById('Dropdown-Button');

    if (this.yes === false) {
      this.yes = true;
      parent!.style.setProperty('border-bottom-right-radius', '0px');
      parent!.style.setProperty('border-bottom-left-radius', '0px');
    } else {
      this.yes = false;
      parent!.style.setProperty('border-bottom-right-radius', '10px');
      parent!.style.setProperty('border-bottom-left-radius', '10px');
    }
  }

  /**
   * Function from drop down menu's styling, ensures proper visual formatting
   */
  setFalse() {
    this.yes = false;
  }
}
