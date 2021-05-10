import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Batch } from '../../models/batch';
import { UserEmail } from '../../models/user-email';
import { BatchService } from '../../services/batch.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-users-email',
  templateUrl: './add-users-email.component.html',
  styleUrls: ['./add-users-email.component.css'],
})

/**
 * Component for adding multiple users at a time, can upload a CSV or type one by one
 * @author Steven Ceglarek
 */
export class AddUsersEmailComponent implements OnInit {

  @Input() batch?:Batch;
  user:UserEmail = {
    email: "",
    batchId: undefined
  }
  newBatch: boolean = false;
  userEmployeeArray: Array<UserEmail> = [];
  batches?: Batch[];
  selectedBatch?: Batch;
  //  For Dropdown menu
  yes: boolean = false;

  constructor(private userService: UserService, private batchService: BatchService) { }

  ngOnInit(): void {
    this.getAllBatches();
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
   * To add an employee email to the array of users to populate the table in HTML, and to ultimately send to the Service for post request
   * @param formEmp form info coming from form tag in HTML
   * @returns the userEmployeeArray with the newly added email
   */
  onAddEmployee(formEmp: NgForm) {
    let checkedEmail = formEmp.value.email;

    if (!this.isEmail(checkedEmail)) {
        alert("Please check emails and try and submit again");
        return;
    }
    const user = this.user = {
      email: formEmp.value.email
    }
    this.userEmployeeArray.push(user)

    return this.userEmployeeArray;
  }

  /**
   * Removing a specific user from the Array of displayed users table
   * @param user the user that will be removed from the array
   */
  onDeleteEmployee(user: UserEmail) {
    let i = 0;
    for (let u of this.userEmployeeArray) {
      if (u.email == user.email) {
        this.userEmployeeArray.splice(i, 1);
      }
      i++;
    }

  }

  /**
   * Grabs the CSV and puts it into a FileReader and then reads through the CSV and splits them on commas and calls another function and 
   * pushes it into an array
   * @param files the CSV file that is uploaded containing all the user emails that will be added to the user Array
   */
  public changeListener(files: FileList){
    if(files && files.length > 0) {
      let file : File | null = files.item(0); 
      let reader: FileReader = new FileReader();
      reader.readAsText(file || new Blob());
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        this.addInformationIntoArray(csv.split(",\r\n"));
        }
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
        alert("There is an invalid email in CSV, please check CSV and resubmit")
        return;
      }
    }
    for (let i of arrayString) {
      let newUser = new UserEmail();
      newUser.email = i;
      this.userEmployeeArray.push(newUser);
    }
  }

  /**
   * Submits the userEmployeeArray to the userService to create all of the users
   */
  submitAll() {
    try {
      console.log(this.selectedBatch);
      this.userService.massCreateUsers(this.userEmployeeArray);
    } catch (Exception) {
      console.log("Something is wrong with your stuff!")
    }
  }

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

  setFalse() {
    this.yes = false;
  }

  /**
   * Selects a batch by batchId and adds it to all of the users in the userEmployeeArray
   * @param batchId the id of the batch you want all the users in the table to be assigned to
   */
  onSelectBatch(batchId:number) {
    for (let u of this.userEmployeeArray) {
      if(this.newBatch) {
        u.batchId = 0;
      } else {
        u.batchId = batchId;
      }
    }
  }

  /**
   * To get all of the batches to populate the dropdown with all of the batches
   */
  getAllBatches() {
    this.batchService.getBatches().then(batch => this.batch = batch.content);
  }

}
