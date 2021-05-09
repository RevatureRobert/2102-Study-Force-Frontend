import { Batch } from './../../models/batch';
import { UserEmail } from './../../models/user-email';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { BatchService } from '../../services/batch.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin-batch-edit',
  templateUrl: './admin-batch-edit.component.html',
  styleUrls: ['./admin-batch-edit.component.css']
})
export class AdminBatchEditComponent implements OnInit {

  users: User[] = [];  //Users array that holds all the users in the batch.
  instructors: User[] = [];  //Users array that holds all the instructors in the batch.
  creationTime: string = '';  //Creating time for the batch as a String.
  name: string = '';  //Name of the batch.
  loaded:boolean = false;  //To confirm view did load.
  id: string = "";  //ID of the batch to be used for batch service method.

  /**
   * Making a batch object base on the initial state of the batch
   */
  batch: Batch ={

    batchId: parseInt(this.id),
    name: this.name,
    instructors: this.instructors,
    users: this.users,
    creationTime: <Date><unknown>this.creationTime
  }




  /**
   *
   * @param batchService The service this component uses.
   * @param route The route this component use to get path parameter ID.
   * @param userService The service this component uses.
   * @param router The router this componet use to route back to the adminBatchDetails page.
   */
  constructor(
    private batchService:BatchService,
    private userService:UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

    })
   }

  ngOnInit(): void {
    this.setUp();
  }

  /**
   * This is the basic set up method to initialize all the fields in this class with the Object received
   * from the batch service.
   */
  setUp(): void {
    this.batchService.getBatchById(this.id)
    .subscribe(batch => {
      this.instructors = batch.instructors;
      this.users = batch.users;
      var date = new Date(batch.creationTime);
      this.creationTime = ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
      this.name = batch.name;

      this.loaded = true;
    })
  }

  /**
   * Warning for the submit button.
   * If the user select yes thenit will execute the submit function.
   */
  warningForSubmit(): void {
    var answer = confirm(`Confirm the changes your have made on batch: ${this.name}`);
    if (answer == true){
        this.submit();
        this.submitButtonClicked();
    }
  }

  /**
   * Warning for the delete button.
   * If the user select yes thenit will execute the delete function.
   */
  warningForDelete(): void {
    var answer = confirm(`Are you sure you want to delete batch: ${this.name}`);
    if (answer == true){
        this.delete();
    }
  }

  /**
   * Warning for the deactivate button.
   * If the user select yes thenit will execute the deactivate function.
   */
  warningForDeactivate(): void {
    var answer = confirm(`Are you sure you want to deactivate batch: ${this.name}`);
    if (answer == true){
        this.deactivate();
    }
  }

  /**
   * This is to redirect the admin back to the view batch details page.
   */
  submitButtonClicked(): void {
    this.router.navigateByUrl(`adminBatchDetails/${this.id}`) ;
  }

  /**
   * This is the submit button that create a batch base on the state of the batch object when the submit button is pressed.
   * Then this function use the updateBatch in batchService to perform the update function.
   */
  submit(): void{
   const batch = this.batch = {
    batchId: parseInt(this.id),
    name: this.name,
    instructors: this.instructors,
    users: this.users,
    creationTime: <Date><unknown>this.creationTime
   }

    this.batchService.updateBatch(this.id,batch)
    console.log(batch)
  }

  /**
   * This function delete the batch.
   */

  delete(): void{
    this.batchService.deleteBatch(this.id);
  }

  /**
   * This function deactivate the batch.
   */
  deactivate(): void {
    this.batchService.deactivateBatch(this.id);
  }

  /**
   * Validation for email
   * @param email The email that is being checked against the regex
   */

   isEmail(email:string):boolean {
    let  isEmailVaild:boolean;

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    isEmailVaild = regexp.test(email);

    return isEmailVaild;
}

/**
 * Removing a specific user from the array of users on the display
 * @param user the user that will be removed from the array
 */

onDeleteEmployee(user: User) {
  this.users.forEach((value,index)=>{
    if(value==user) {
      this.users.splice(index,1);
    }
  });
  console.log(this.users);
}

/**
 * Removing a specific instructor from the array of instructors on the display
 * @param user the user that will be removed from the array
 */
onDeleteInstructor(user: User) {
  this.instructors.forEach((value,index)=>{
    if(value==user) {
      this.instructors.splice(index,1);
    }
  });
  console.log(this.instructors);
}

}


