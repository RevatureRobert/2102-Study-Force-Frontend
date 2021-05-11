import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Batch } from '../../models/batch';
import { User } from '../../models/user';
import { BatchService } from '../../services/batch.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})

/**
 * Parent component for user profile, gathers information and determines which view to display
 */
export class UserProfileComponent implements OnInit {
  user?: User;
  isAdmin: boolean = false;
  isMe: boolean = false;
  id?: number;
  isLoading: boolean = true;
  batches?: Batch[];

  /**
   * Gathers profile id from route path parameter
   * @param route
   * @param userService
   * @param batchService
   */
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private batchService: BatchService
  ) {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }

  /**
   * Gathers user info and checks if user profile should get admin view
   */
  async ngOnInit() {
    this.isLoading = true;

    await this.populateUserProfileOrDefault();
    await this.populateBatches();
    let u: User = JSON.parse(localStorage.getItem('loggedInUser')!);

    this.isAdmin =
      (u.authority === 'ADMIN' || u.authority === 'SUPER_ADMIN') && !this.isMe;

    this.isLoading = false;
  }

  /**
   * Gets array of batches from BatchService and assigns it to this.batches
   */
  async populateBatches() {
    try {
      await this.batchService
        .getBatchesByMemberId(this.user!.userId)
        .then((response) => {
          this.batches = response;
        });
    } catch (exception) {
      alert(
        "There was an error retrieveing user's batches. Please try again later.\n\nIf this issue persists, please contact support."
      );
    }
  }

  /**
   * Gets user from UserService using id and assigns it to this.user
   */
  async populateUserProfileOrDefault() {
    let u: User = JSON.parse(localStorage.getItem('loggedInUser')!);

    try {
      await this.userService.getUserByUserId(this.id!).then((response) => {
        this.user = response;
        this.isMe = this.user?.userId == u.userId;
      });
    } catch (exception) {
      alert(
        'There was an error trying to retrieve the user.\n\nIf this issue persists, please contact support.\n\nYou will be returned to your profile.'
      );
      this.user = u;
      this.isMe = true;
    }
  }
}
