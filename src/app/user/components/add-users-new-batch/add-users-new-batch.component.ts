import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewBatch } from '../../models/new-batch';
import { UserEmail } from '../../models/user-email';
import { BatchService } from '../../services/batch.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-users-new-batch',
  templateUrl: './add-users-new-batch.component.html',
  styleUrls: ['./add-users-new-batch.component.css']
})
/**
 * Component for creating a batch and adding users and instructors to the batch at the same time.
 * If the fields are left blank, it will create an empty batch
 * @author Steven Ceglarek
 */
export class AddUsersNewBatchComponent implements OnInit {

  userEmail?:string;

  instructorEmail?:string;

  userEmployeeArray: Array<string> = [];
  userInstructorArray: Array<string> = [];
  constructor(private userService: UserService, private batchService: BatchService, private router: Router) { }
  ngOnInit(): void {
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
    const user = this.userEmail = formEmp.value.email;
    this.userEmployeeArray.push(user)

    return this.userEmployeeArray;
  }

  /**
   * Removing a specific user from the Array of displayed users table
   * @param user the user that will be removed from the array
   */
  onDeleteEmployee(user: string) {
    let i = 0;
    for (let u of this.userEmployeeArray) {
      if (u == user) {
        this.userEmployeeArray.splice(i, 1);
      }
      i++;
    }

  }

    /**
   * To add an instructor email to the array of instructors to populate the table in HTML, and to ultimately send to the Service for post request
   * @param formEmp form info coming from form tag in HTML
   * @returns the userInstructorArray with the newly added email
   */
    onAddInstructor(formInst: NgForm) {
      let checkedEmail = formInst.value.email;
  
      if (!this.isEmail(checkedEmail)) {
          alert("Please check emails and try and submit again");
          return;
      }
      const instructor = this.instructorEmail = formInst.value.email;
      
      this.userInstructorArray.push(instructor)
  
      return this.userInstructorArray;
    }
  
    /**
     * Removing a specific instructor from the Array of displayed instructors table
     * @param user the user that will be removed from the array
     */
    onDeleteInstructor(user: string) {
      let i = 0;
      for (let u of this.userInstructorArray) {
        if (u == user) {
          this.userInstructorArray.splice(i, 1);
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
      let newUser = i;
      this.userEmployeeArray.push(newUser);
    }
  }
  /**
   * Submits all of the information to create a new batch, There are also checks if the employeeArray or instructorArray is empty or not
   * @param batchName this is the name of the batch that is being created
   */
  async submitAll(batchName: string) {
    try {
      let batch: NewBatch = {
        batchId: 0,
        name: batchName,
        instructors: this.userInstructorArray,
        users: this.userEmployeeArray
      }
      if(this.userEmployeeArray.length == 0 && this.userInstructorArray.length == 0) {
        this.batchService.createBatch(batch);
        return;
      } else if (this.userInstructorArray.length == 0) {
        await this.userService.massCreateUsers(this.userEmployeeArray);
        this.batchService.createBatch(batch);
        return;
      } else if (this.userEmployeeArray.length == 0) {
        await this.userService.massCreateUsers(this.userInstructorArray);
        this.batchService.createBatch(batch);
        return;
      } else {
        await this.userService.massCreateUsers(this.userEmployeeArray);
        await this.userService.massCreateUsers(this.userInstructorArray);
        this.batchService.createBatch(batch);
        return;
      }
    } catch (Exception) {
      console.log("Something is wrong with your stuff!")
    }
  }

}
