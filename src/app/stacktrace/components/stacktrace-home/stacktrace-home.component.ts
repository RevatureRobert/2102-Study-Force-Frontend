import { Component, OnInit } from '@angular/core';
import { StacktraceService } from '../../services/stacktrace.service';
import { Stacktrace } from '../../models/stacktrace';
import { TechnologyService } from '../../services/technology.service';
import { Technology } from '../../models/technology';
import { Router } from '@angular/router';

/**
 * A component that displays a paginated table of Stacktraces, TODO: Stacktraces can be filtered by technology and search term
 */
@Component({
  selector: 'app-stacktrace-home',
  templateUrl: './stacktrace-home.component.html',
  styleUrls: ['./stacktrace-home.component.css']
})
export class StacktraceHomeComponent implements OnInit {
  allStacktraces: Stacktrace[] = [];
  filteredStacktraces: Stacktrace[] = [];
  technologies: Technology[] = [];
  // The string to display on the dropdown menu for selecting a technology to filter by
  currentTechnologyName: string = "All";
  // Pagination fields
  pageSize: number = 10;
  page: number = 1;

  constructor(
    private stacktraceService: StacktraceService,
    private technologyService: TechnologyService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getStacktrace();
    this.getTechnology();
  }

  /**
   * Contains the logic for filtering which stacktraces to dispaly. This should eventually be done in the backend.
   * @param technology The Technology to filter the stacktraced by
   * @param searchParameter The search parameter to filter the stacktraced by, this is typed in a search bar at the top of the componenet
   */
  filterStacktraces(technology?: Technology, searchParameter?: string): void {
    if(technology) {
      this.currentTechnologyName = technology.technologyName;
      this.filteredStacktraces = this.allStacktraces.filter((stacktrace: Stacktrace) => {
        if(stacktrace.technology)
          return stacktrace.technology!.technologyId == technology.technologyId;
        else
          return false;
      })
    } else {
      this.currentTechnologyName = "All";
      this.filteredStacktraces = this.allStacktraces;
    }
  }

  /**
   * retrieve Stacktraces from the backend through stacktrace.service
   */
  getStacktrace(): void {
    this.stacktraceService.getAllStacktrace()
      .then((data) => {
        this.allStacktraces = data;
        // Any Stacktraces without an assigned technology will display their technology as 'Other'
        this.allStacktraces.forEach((stacktrace: Stacktrace) => {
          if(!stacktrace.technology){
            stacktrace.technology = {technologyName: 'Other'};
          }
        })
        this.filterStacktraces();
      });
  }

  /**
   * retrieve Technologies from the backend through technology.service
   */
  getTechnology(): void {
    this.technologyService.getAllTechnology()
      .then((data) => {
        this.technologies = data;
      });
  }

  /**
   * function called to route the user to the individual stacktrace after they click it
   */
  navigate(stacktrace: Stacktrace): void {
    this.router.navigate([`/stacktrace/${stacktrace.stacktraceId}`]);
  }
}
