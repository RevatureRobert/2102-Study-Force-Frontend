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
  styleUrls: ['./new-technology.component.css']
})
export class NewTechnologyComponent implements OnInit {

  technology : Technology = {
    technologyName : '',
  };

  /**
   * @param route provides the route to be used upon form activation. Never used.
   * @param technologyService the service used to send Technology-related requests to the backend
   * @param router provides for routing to other components
   */
  constructor(private route :ActivatedRoute, private technologyService : TechnologyService,private router: Router) {
    this.technology =  new Technology();
  }

  ngOnInit(): void {
  }

  /**
   * On form submission, saves the newly-created Technology object to the backend.
   */
  onSubmit() {
    this.technologyService.addTechnology(this.technology).subscribe(result => this.gotoStacktraceList());
  }

  /**
   * On form submission, routes the user back to the list of all stacktraces.
   */
  gotoStacktraceList() {
    this.router.navigate(['/stacktraces']);
  }
}
