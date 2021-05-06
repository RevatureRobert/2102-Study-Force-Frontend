import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserEmail } from '../../models/user-email';
import { UserService } from '../../services/user.service';

// import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-users-email',
  templateUrl: './add-users-email.component.html',
  styleUrls: ['./add-users-email.component.css']
})
export class AddUsersEmailComponent implements OnInit {

  user:UserEmail = {
    email: ""
  }

  // userEmployee:UserEmail = {
  //   email;l: ""
  // }

  userAdminArray: Array<UserEmail> = [];

  userEmployeeArray: Array<UserEmail> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmitAdmin(formAdmin: NgForm) {
    this.user = {
      email: formAdmin.value.email
    }
    this.userAdminArray.push(this.user)
  }


  onSubmitEmployee(formEmp: NgForm) {
    this.user = {
      email: formEmp.value.email
    }
    this.userEmployeeArray.push(this.user)
  }

  onDeleteAdmin() {
    //  TODO: Need to refactor to remove from specific batch when batch service is implemented
    this.userAdminArray.pop();
  }

  onDeleteEmployee() {
        //  TODO: Need to refactor to remove from specific batch when batch service is implemented
    this.userEmployeeArray.pop();

  }

  public changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
      let file : File | null = files.item(0); 
      console.log(file?.name);
      console.log(file?.size);
      console.log(file?.type);
      let reader: FileReader = new FileReader();
      reader.readAsText(file || new Blob());
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        var csvSplitArray: Array<string>;
        // csvSplitArray = csv.split(",\r\n");
        this.addInformationIntoArray(csv.split(",\r\n"));
        }
      }
  }

  addInformationIntoArray(arrayString: Array<string>) {
    let index = 0;
    for (let i of arrayString) {
      let newUser = new UserEmail();
      newUser.email = i;
      this.userEmployeeArray.push(newUser);
    }

  }

  finalSubmit() {
    try {
      this.userService.massCreateUsers(this.userAdminArray, this.userEmployeeArray);

    } catch (Exception) {
      console.log("There was a problem with your submission");
    }

  }

}
