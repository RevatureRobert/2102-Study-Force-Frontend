import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StacktraceService } from '../../services/stacktrace.service'
import { Stacktrace } from '../../models/stacktrace'

@Component({
  selector: 'app-stacktrace',
  templateUrl: './stacktrace.component.html',
  styleUrls: ['./stacktrace.component.css']
})
export class StacktraceComponent implements OnInit {

  currentStacktrace: Stacktrace = {
    title : '',
    body : '',
    stacktraceId: 0,
    userId : 0,
    userName: "",
    creationTime: "",
    technologyId :0,
    technologyName:"",
  };
  message = '';

  constructor(private stacktraceService: StacktraceService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.message = '';
    this.getStacktrace(this.route.snapshot.params.stacktraceId);
  }

  getStacktrace(id: string): void {
    this.stacktraceService.getStacktrace(id)
      .subscribe(
        data => {
          this.currentStacktrace = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateStacktrace(): void {
    this.stacktraceService.editStacktrace(this.currentStacktrace.stacktraceId, this.currentStacktrace)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }


  deleteStacktrace(): void {
    this.stacktraceService.deleteStacktrace(this.currentStacktrace.stacktraceId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/stacktrace']);
        },
        error => {
          console.log(error);
        });
  }
}
