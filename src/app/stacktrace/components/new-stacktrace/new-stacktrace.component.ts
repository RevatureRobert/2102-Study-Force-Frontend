import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stacktrace } from 'src/app/stacktrace/models/stacktrace';
import { StacktraceService } from 'src/app/stacktrace/services/stacktrace.service';
import { Technology } from 'src/app/stacktrace/models/technology';

@Component({
  selector: 'app-new-stacktrace',
  templateUrl: './new-stacktrace.component.html',
  styleUrls: ['./new-stacktrace.component.css']
})
export class NewStacktraceComponent implements OnInit {


  stacktrace : Stacktrace = {
    title:"",
    body:""
  };

  constructor(private route :ActivatedRoute,private stacktraceService: StacktraceService,private router: Router) {
    this.stacktrace = new Stacktrace();
   }

   ngOnInit(): void {
  }



   onSubmit() {
    this.stacktraceService.save(this.stacktrace).subscribe(result => this.gotoStacktraceList());
  }

  gotoStacktraceList() {
    this.router.navigate(['/stacktrace']);
  }

}
