import { Batch } from './../../models/batch';
import { UserEmail } from './../../models/user-email';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { BatchService } from '../../services/batch.service';
import { NgForm } from '@angular/forms';
import { Input } from '@angular/core';


@Component({
  selector: 'app-admin-batch-edit',
  templateUrl: './admin-batch-edit.component.html',
  styleUrls: ['./admin-batch-edit.component.css']
})
export class AdminBatchEditComponent implements OnInit {

  users: string[] = [];  //String array that holds all the emails of all users in the batch.
  instructors: string[] = [];  //String array that holds all the emails of all instructors in the batch.
  creationTime: string = '';  //Creating time for the batch as a String.
  name: string = '';  //Name of the batch.
  loaded:boolean = false;  //To confirm view did load.
  id: string = "";  //ID of the batch to be used for batch service method.

  userCurrentEmail:string = "";
  instructorCurrentEmail:string = "";

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

      for (var x in (batch.users)) {
        this.users.push(batch.users[x].email);
      }
      for (var index in (batch.instructors)) {
        this.instructors.push(batch.instructors[index].email);
      }

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
  async warningForSubmit() {

    let answer = confirm(`Confirm the changes your have made on batch: ${this.name}.`);
    if (answer == true){
        this.loaded = false;
        await this.submit();
        this.redirect();
    }
  }

  /**
   * Warning for the delete button.
   * If the user select yes thenit will execute the delete function.
   */
  async warningForDelete() {
    let answer = confirm(`Are you sure you want to delete batch: ${this.name}?`);
    if (answer == true){
      this.loaded = false;
      await this.delete();
        this.redirect();
    }
  }

  /**
   * Warning for the deactivate button.
   * If the user select yes thenit will execute the deactivate function.
   */
  async warningForDeactivate() {
    let answer = confirm(`Are you sure you want to deactivate batch: ${this.name}? \nAll users will be deactivated and the batch will be deleted.`);
    if (answer == true){
      this.loaded = false;
      await this.deactivate();
      this.redirect();
    }
  }

  /**
   * This is to redirect the admin back to the view batch details page.
   */
  redirect(): void {
    this.router.navigateByUrl(`adminBatchDetails/${this.id}`) ;
  }

  /**
   * This is to refresh the page whenever a redirect is caleld.
   */
  refreshPage(){
    window.location.reload();
  }

  /**
   * This is the submit button that create a batch base on the state of the batch object when the submit button is pressed.
   * Then this function use the updateBatch in batchService to perform the update function.
   */
  async submit(){

    await this.batchService.updateBatch(this.id,this.name,this.instructors,this.users);

  }

  /**
   * This function delete the batch.
   */

  async delete(){
    await this.batchService.deleteBatch(this.id);
  }

  /**
   * This function deactivate the batch.
   */
  async deactivate() {
    await this.batchService.deactivateBatch(this.id);
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

onDeleteEmployee(user: string) {
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
onDeleteInstructor(user: string) {
  this.instructors.forEach((value,index)=>{
    if(value==user) {
      this.instructors.splice(index,1);
    }
  });
  console.log(this.instructors);
}

/**
   * To add an employee email to the array of users to populate the table in HTML, and to ultimately send to the Service for post request
   * @param formEmp form info coming from form tag in HTML
   * @returns the userEmployeeArray with the newly added email
   */
 onAddUser(formEmp: NgForm) {
  let checkedEmail = formEmp.value.email;

  if (!this.isEmail(checkedEmail)) {
      alert("Please check emails and try and submit again");
      return;
  }
  const email = this.userCurrentEmail = checkedEmail;

  this.users.push(email)

  return this.users;
}

onAddInstructor(formEmp: NgForm) {
  let checkedEmail = formEmp.value.email;

  if (!this.isEmail(checkedEmail)) {
      alert("Please check emails and try and submit again");
      return;
  }
  const email = this.instructorCurrentEmail = checkedEmail;

  this.instructors.push(checkedEmail)

  return this.instructors;
}

}
