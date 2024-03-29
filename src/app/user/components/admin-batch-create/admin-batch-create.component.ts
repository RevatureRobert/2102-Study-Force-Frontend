import { Batch } from './../../models/batch';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BatchService } from '../../services/batch.service';
import { UserService } from '../../services/user.service';

/**
 * This is the Batch Create component.
 * @author Anakin Kung
 */

@Component({
  selector: 'app-admin-batch-create',
  templateUrl: './admin-batch-create.component.html',
  styleUrls: ['./admin-batch-create.component.css'],
})
export class AdminBatchCreateComponent implements OnInit {
  users: string[] = []; //String array that holds all the emails of all users in the batch.
  instructors: string[] = []; //String array that holds all the emails of all instructors in the batch.
  creationTime: string = ''; //Creating time for the batch as a String.
  name: string = ''; //Name of the batch.
  loaded: boolean = false; //To confirm view did load.
  id: string = ''; //ID of the batch to be used for batch service method.

  userCurrentEmail: string = ''; //This is the place holder for the user email field in the form.
  instructorCurrentEmail: string = ''; //This is the place holder for the instructor email field in the form.

  /**
   *
   * @param batchService The service this component uses.
   * @param userService The service this component uses.
   * @param router The router this componet use to route back to the adminBatchDetails page.
   */
  constructor(
    private batchService: BatchService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setUp();
  }

  /**
   * This is the basic set up method to initialize all the fields in this class
   * with the Object received from the batch service. It takes all the emails
   * from users/instructors and put them in an array of Strings
   * which only hold the emails of users/instructors instead of the actual user object.
   */
  setUp(): void {
    this.users = [];
    this.instructors = [];
    this.name = '';
    this.loaded = true;
  }

  /**
   * Warning for the submit button.
   * If the user select yes thenit will execute the submit function.
   */
  async warningForSubmit() {
    let answer = confirm(
      `Confirm the changes your have made on batch: ${this.name}.`
    );
    if (answer == true) {
      this.loaded = false;
      await this.submit();
      this.redirect();
    }
  }

  /**
   * This is to redirect the admin back to the view batch details page.
   */
  redirect(): void {
    this.router.navigateByUrl(`adminBatchDetails/${this.id}`);
  }

  /**
   * This is the submit button that create a batch base on the state of the batch object when the submit button is pressed.
   * Then this function use the updateBatch in batchService to perform the update function.
   */
  async submit() {
    this.id =
      (
        await this.batchService.createBatch(
          '0',
          this.name,
          this.instructors,
          this.users
        )
      ).batchId + '';
  }

  /**
   * Validation for email
   * @param email The email that is being checked against the regex
   */

  isEmail(email: string): boolean {
    let isEmailVaild: boolean;

    let regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    isEmailVaild = regexp.test(email);

    return isEmailVaild;
  }

  /**
   * It checks the email to see if it is valid, if it is then it gets pushed to the array of emails
   * of users, if not then we alert the user to check the email format.
   * This method takes in email(user) that is already in the system.
   * @param formEmp This is where the method takes in the email from the user input
   * @returns
   */
  onAddUser(formEmp: NgForm) {
    let checkedEmail = formEmp.value.email;

    if (!this.isEmail(checkedEmail)) {
      alert('Please check emails and try and submit again');
      return;
    }
    const email = (this.userCurrentEmail = checkedEmail);

    this.users.push(email);

    return this.users;
  }

  /**
   * Removing a specific user from the array of users on the display
   * @param user the user that will be removed from the array
   */

  onDeleteUser(user: string) {
    this.users.forEach((value, index) => {
      if (value == user) {
        this.users.splice(index, 1);
      }
    });
  }

  /**
   * Removing a specific instructor from the array of instructors on the display
   * @param user the user that will be removed from the array
   */
  onDeleteInstructor(user: string) {
    this.instructors.forEach((value, index) => {
      if (value == user) {
        this.instructors.splice(index, 1);
      }
    });
  }
  /**
   * It checks the email to see if it is valid, if it is then it gets pushed to the array of emails
   * of instructors, if not then we alert the user to check the email format.
   * This method takes in email(instructor) that is already in the system.
   * @param formEmp This is where the method takes in the email from the user input
   * @returns
   */
  onAddInstructor(formEmp2: NgForm) {
    let checkedEmail = formEmp2.value.email;

    if (!this.isEmail(checkedEmail)) {
      alert('Please check emails and try and submit again');
      return;
    }
    const email = (this.instructorCurrentEmail = checkedEmail);

    this.instructors.push(email);

    return this.instructors;
  }

  /**
   * Grabs the CSV and puts it into a FileReader and then reads through the CSV and splits them on commas and calls another function and
   * pushes it into an array
   * @param files the CSV file that is uploaded containing all the user emails that will be added to the user Array
   */
  public changeListener(files: FileList) {
    if (files && files.length > 0) {
      let file: File | null = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file || new Blob());
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        this.addInformationIntoArray(csv.split(',\r\n'));
      };
    }
  }

  /**
   * First validates emails that came from CSV and kicks it back if any email is invalid, then creates users with
   * emails from csv and pushes them into the userEmployeeArray
   * @param arrayString the array of split strings coming from {@function changeListener()} to be added to array
   */
  addInformationIntoArray(arrayString: Array<string>) {
    for (let i of arrayString) {
      if (!this.isEmail(i)) {
        alert(
          'There is an invalid email in CSV, please check CSV and resubmit'
        );
        return;
      }
    }
    for (let i of arrayString) {
      let newUser = i;
      this.users.push(newUser);
    }
  }
}
