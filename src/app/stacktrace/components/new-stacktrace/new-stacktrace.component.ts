import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stacktrace } from 'src/app/stacktrace/models/stacktrace';
import { StacktraceService } from 'src/app/stacktrace/services/stacktrace.service';
import { Technology } from '../../models/technology';
import { User } from '../../models/user';
import { TechnologyService } from '../../services/technology.service';

/**
 * Handles the logic of the form that creates new Stacktrace objects.
 */
@Component({
  selector: 'app-new-stacktrace',
  templateUrl: './new-stacktrace.component.html',
  styleUrls: ['./new-stacktrace.component.css'],
})
export class NewStacktraceComponent implements OnInit {
  technologyId: number = 1;
  technology: Technology[] = [];
  LoggedUser: any;

  // a blank Stacktrace object, ready to be populated from the form imput
  stacktrace: Stacktrace = {
    title: '',
    body: '',
    stacktraceId: 0,
    userId: 0,
    userName: '',
    creationTime: '',
    technologyId: 0,
    technologyName: '',
  };

  /**
   * @param route provides the route to be used upon form activation. Never used.
   * @param stacktraceService the service used to send new stacktrace requests to the backend
   * @param router provides for routing to other components
   * @param technologyService the service used to send Technology-related requests to the backend
   */
  constructor(
    private route: ActivatedRoute,
    private stacktraceService: StacktraceService,
    private router: Router,
    private technologyService: TechnologyService
  ) {}

  ngOnInit(): void {
    this.LoggedUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.getAllTechnology();
  }

  /**
   * Sets the new Stacktrace's technologyId based on the given value from the dropdown.
   */
  setNewTechnologyId(id: number): void {
    this.stacktrace.technologyId = id;
    this.technologyId = id;
  }

  /**
   * On form submission, saves the newly-created Stacktrace object to the backend.
   */
  onSubmit() {
    this.stacktrace.userId = this.LoggedUser.userId;
    this.stacktrace.technologyId = this.technologyId;
    console.log(this.stacktrace);
    this.stacktraceService
      .save(this.stacktrace)
      .subscribe((result) => this.gotoStacktraceList());
  }

  /**
   * On form submission, routes the user back to the list of all stacktraces.
   */
  gotoStacktraceList() {
    this.router.navigate(['/stacktraces']);
  }

  /**
   * Retrieves all technologies from the backend for display in the dropdown menu.
   */
  getAllTechnology() {
    this.technologyService.getAllTechnology().then((data: Technology[]) => {
      this.technology = data;
      this.technologyId = this.technology[0].technologyId || 1;
    });
  }

  // Flag representing whether or not the dropdown button has been clicked
  yes: boolean = false;

  /**
   * Provides functionality to style the dropdown button after it has been clicked.
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
   * Toggles the dropdown button flag.
   */
  setFalse() {
    this.yes = false;
  }
}
