import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technology } from 'src/app/stacktrace/models/technology';
import { TechnologyService } from 'src/app/stacktrace/services/technology.service';

/**
 * Handles the logic of the form that creates new Technology objects.
 */
@Component({
  selector: 'app-new-technology',
  templateUrl: './new-technology.component.html',
  styleUrls: ['./new-technology.component.css'],
})
export class NewTechnologyComponent implements OnInit {
  result?: string;
  error?: string;
  technologyId: number = 1;
  technologies: Technology[] = [];
  technology: Technology = {
    technologyId: 0,
    technologyName: '',
  };
  isAdd = true;

  /**
   * @param route provides the route to be used upon form activation. Never used.
   * @param technologyService the service used to send Technology-related requests to the backend
   * @param router provides for routing to other components
   */
  constructor(
    private route: ActivatedRoute,
    private technologyService: TechnologyService,
    private router: Router
  ) {
    this.technology = new Technology();
    this.result = 'add'; //defaults for add
  }

  ngOnInit(): void {
    this.getAllTechnology();
  }

  /**
   * Sets technologyId based on the given value from the dropdown.
   */
  setNewTechnologyId(id: number): void {
    this.technologyId = id;
  }

  /**
   * On form submission, saves the newly-created Technology object to the backend.
   */
  onSubmit() {
    if (this.result === 'add') {
      this.isAdd = true;
      this.technologyService
        .addTechnology(this.technology)
        .subscribe((result) => this.gotoStacktraceList());
    }

    if (this.result === 'edit') {
      this.isAdd = false;
      this.technology.technologyId = this.technologyId;
      this.technologyService
        .editTechnology(this.technology)
        .subscribe((result) => this.gotoStacktraceList());
    }

    if (this.result === 'delete') {
      this.isAdd = false;

      this.technologyService.deleteTechnology(this.technologyId).subscribe(
        (result) => {
          this.gotoStacktraceList();
        },
        (errorMessage) => {
          this.error = errorMessage;
          setTimeout(() => {
            window.location.href = window.location.href;
          }, 2750);
        }
      );
    }
  }

  getAllTechnology() {
    this.technologyService.getAllTechnology().then((data: Technology[]) => {
      this.technologies = data;
      this.technologyId = this.technologies[0].technologyId || 1;
    });
  }

  /**
   * On form submission, routes the user back to the list of all stacktraces.
   */
  gotoStacktraceList() {
    this.router.navigate(['/stacktraces']);
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
