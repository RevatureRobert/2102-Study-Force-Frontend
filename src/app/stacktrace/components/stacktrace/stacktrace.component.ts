import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StacktraceService } from '../../services/stacktrace.service'
import { Stacktrace } from '../../models/stacktrace'
import { Solution } from '../../models/solution';
import { SolutionService } from '../../services/solution.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-stacktrace',
  templateUrl: './stacktrace.component.html',
  styleUrls: ['./stacktrace.component.css']
})
export class StacktraceComponent implements OnInit {
  isAdmin = false;
  isCreator = false;
  LoggedUser: any;

  currentStacktrace!: Stacktrace;

  constructor(
    private stacktraceService: StacktraceService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.LoggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    this.getStacktrace(this.route.snapshot.params.stacktraceId);
  }

  getUserPriviledges(): void {
    if( this.LoggedUser.authority === 'ADMIN'){
      this.isAdmin = true;
    };
    console.log(this.currentStacktrace.userId);
    if(this.LoggedUser.userId === this.currentStacktrace.userId){
      this.isCreator = true;
    }
    console.log(this.isCreator, this.isAdmin);
  }

  getStacktrace(stacktraceId: string): void {
    this.stacktraceService.getStacktrace(stacktraceId)
      .subscribe(
        data => {
          this.currentStacktrace = data;
          console.log(data);
          this.getUserPriviledges();
        },
        error => {
          console.log(error);
        });
  }

  deleteStacktrace(){
    this.stacktraceService.deleteStacktrace(this.route.snapshot.params.stacktraceId).subscribe(result => {
      this.gotoStacktraceList();
    });
  }

  gotoStacktraceList() {
    this.router.navigate(['/stacktraces']);
  }
}
