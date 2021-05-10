import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stacktrace } from 'src/app/stacktrace/models/stacktrace';
import { StacktraceService } from 'src/app/stacktrace/services/stacktrace.service';
import { Technology } from '../../models/technology';
import { User } from '../../models/user';
import { TechnologyService } from '../../services/technology.service';

@Component({
  selector: 'app-new-stacktrace',
  templateUrl: './new-stacktrace.component.html',
  styleUrls: ['./new-stacktrace.component.css']
})
export class NewStacktraceComponent implements OnInit {
  technologyId: number = 1;
  technology: Technology[] = [];
  LoggedUser: any;

  stacktrace: Stacktrace = {
    title : '',
    body : '',
    stacktraceId: 0,
    userId : 0,
    userName: "",
    creationTime: "",
    technologyId :0,
    technologyName:"",
  };

  constructor(private route :ActivatedRoute, private stacktraceService: StacktraceService,private router: Router, private technologyService: TechnologyService) {
    this.stacktrace = new Stacktrace();
        // //TODO remove this placeholder user
        // let u:User = {
        //   userId:2,
        //     email:"jomama@hotmail.gov",
        //     name:"John Doe",
        //     active:false,
        //     subscribedStacktrace:true,
        //     subscribedFlashcard:true,
        //     authority:"ADMIN",
        //     registrationTime:new Date(1620310931740),
        //     lastLogin:new Date(1620310931740)
        //   };
        // //TODO remove this placeholder user in local storage
        // localStorage.setItem('loggedInUser', JSON.stringify(u));
        // console.log(localStorage.getItem("loggedInUser"));
   }

   ngOnInit(): void {
    this.LoggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    this.getAllTechnology();
  }

  setNewTechnologyId(id: number): void{
    this.stacktrace.technologyId = id;
    this.technologyId = id;
  }



   onSubmit() {
    this.stacktrace.userId = this.LoggedUser.userId;
    this.stacktrace.technologyId = this.technologyId;
    console.log(this.stacktrace);
    this.stacktraceService.save(this.stacktrace).subscribe(result => this.gotoStacktraceList());
  }

  gotoStacktraceList() {
    this.router.navigate(['/stacktraces']);
  }

  getAllTechnology(){
    this.technologyService.getAllTechnology().then(
      (      data: Technology[]) =>{
        this.technology = data;
        this.technologyId = this.technology[0].technologyId || 1;
      }
    )
  }

  yes: boolean = false;

  //If the dropdown button is clicked this will provide functionallity to style the button based on the button click.
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

  //If the dropdown loses focus, set the boolean to false.
  setFalse() {
    this.yes = false;
  }

}
