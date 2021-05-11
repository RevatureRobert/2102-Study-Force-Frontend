import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Batch } from 'src/app/user/models/batch';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-user-profile-user-view',
  templateUrl: './user-profile-user-view.component.html',
  styleUrls: ['./user-profile-user-view.component.css']
})

/**
 * Component for the USER view of a user profile
 */
export class UserProfileUserViewComponent implements OnInit {

  @Input() user?: User;
  @Input() batches?: Batch[];
  @Input() isMe?: boolean;
  isLoading = true;

  /**
   * @param router
   */
  constructor(private router: Router) { }

  /**
   * Gets loggedInUser from local storage and checks if the user whoes
   * profile is being viewed is the currently logged in user
   */
  ngOnInit(): void {
    const u: User = JSON.parse(localStorage.getItem('loggedInUser')!);
    if (u.userId == this.user?.userId){
      this.isMe = true;
    }
    this.isLoading = false;
  }

  /**
   * Routes to the batch details page of a specific batch
   * @param batchId The id of the batch to navigate to
   */
  goToBatch(batchId: number){
    this.router.navigate([`/batchDetails/${batchId}`]);
  }
}
