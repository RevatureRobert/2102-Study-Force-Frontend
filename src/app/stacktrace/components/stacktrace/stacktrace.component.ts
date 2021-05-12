import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StacktraceService } from '../../services/stacktrace.service';
import { Stacktrace } from '../../models/stacktrace';
import { Solution } from '../../models/solution';
import { SolutionService } from '../../services/solution.service';
import { User } from '../../models/user';

/**
 * A component that displays a single Stacktrace object in full, with nested solutions below it.
 */
@Component({
  selector: 'app-stacktrace',
  templateUrl: './stacktrace.component.html',
  styleUrls: ['./stacktrace.component.css'],
})
export class StacktraceComponent implements OnInit {
  isAdmin = false;
  isCreator = false;
  LoggedUser: any;
  stacktraceId?: number; // added these to get rid of error from notifications
  userId?: number; // added these to get rid of error from notifications

  currentStacktrace!: Stacktrace;

  /**
   * @param stacktraceService the service for handling stacktrace-related requests
   * @param route provides the route for getting the current Stacktrace
   * @param router used for routing to other components
   */
  constructor(
    private stacktraceService: StacktraceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.LoggedUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.getStacktrace(this.route.snapshot.params.stacktraceId);
  }

  /**
   * Accesses the priviledges [sic] of the currently-logged-in user and sets isAdmin and isCreator appropriately.
   */
  getUserPriviledges(): void {
    if (
      this.LoggedUser.authority === 'ADMIN' ||
      this.LoggedUser.authority === 'SUPER_ADMIN'
    ) {
      this.isAdmin = true;
    }
    if (this.LoggedUser.userId === this.currentStacktrace.userId) {
      this.isCreator = true;
    }
  }

  /**
   * Retrieves the given Stacktrace object from the backend using the service's getStacktrace() method.
   */
  getStacktrace(stacktraceId: string): void {
    this.stacktraceService.getStacktrace(stacktraceId).subscribe(
      (data) => {
        this.currentStacktrace = data;
        this.getUserPriviledges();
      },
      (error) => {
      }
    );
  }

  /**
   * Deletes the given Stacktrace object from the backend using the service's deleteStacktrace() method.
   */
  deleteStacktrace(): void {
    this.stacktraceService
      .deleteStacktrace(this.route.snapshot.params.stacktraceId)
      .subscribe((result) => {
        this.gotoStacktraceList();
      });
  }

  /**
   * Routes the user back to the list of all stacktraces.
   */
  gotoStacktraceList(): void {
    this.router.navigate(['/stacktraces']);
  }
}
