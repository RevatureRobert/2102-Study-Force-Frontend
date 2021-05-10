import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technology } from 'src/app/stacktrace/models/technology';
import { TechnologyService } from 'src/app/stacktrace/services/technology.service';


@Component({
  selector: 'app-new-technology',
  templateUrl: './new-technology.component.html',
  styleUrls: ['./new-technology.component.css']
})
export class NewTechnologyComponent implements OnInit {

  technology : Technology = {
    technologyName : '',
  };


  constructor(private route :ActivatedRoute, private technologyService : TechnologyService,private router: Router) {
    this.technology =  new Technology();
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.technologyService.addTechnology(this.technology).subscribe(result => this.gotoStacktraceList());
  }

  gotoStacktraceList() {
    this.router.navigate(['/stacktraces']);
  }
}
