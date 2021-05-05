import { Component, OnInit } from '@angular/core';
import { StacktraceService } from '../../services/stacktrace.service';
import { Stacktrace } from '../../models/stacktrace';
import { TechnologyService } from '../../services/technology.service';
import { Technology } from '../../models/technology';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stacktrace-home',
  templateUrl: './stacktrace-home.component.html',
  styleUrls: ['./stacktrace-home.component.css']
})
export class StacktraceHomeComponent implements OnInit {
  allStacktraces: Stacktrace[] = [];
  filteredStacktraces: Stacktrace[] = [];
  technologies: Technology[] = [];
  currentTechnologyName: string = "All";
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

  filterStacktraces(technology?: Technology, searchParameter?: string): void {
    if(technology) {
      this.currentTechnologyName = technology.technologyName;
      this.filteredStacktraces = this.allStacktraces.filter((stacktrace: Stacktrace) => {
        if(stacktrace.technology)
          return stacktrace.technology.technologyId == technology.technologyId;
        else
          return false;
      })
    } else {
      this.currentTechnologyName = "All";
      this.filteredStacktraces = this.allStacktraces;
    }
  }

  getStacktrace(): void {
    this.stacktraceService.getAllStacktrace()
      .then((data) => {
        this.allStacktraces = data;
        this.filterStacktraces();
      });
  }

  getTechnology(): void {
    this.technologyService.getAllTechnology()
      .then((data) => {
        this.technologies = data;
      });
  }

  navigate(stacktrace: Stacktrace): void {
    this.router.navigate([`/stacktrace/${stacktrace.stacktraceId}`]);
  }
}
