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

  userEmployeeArray: Array<UserEmail> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmitEmployee(formEmp: NgForm) {
    const user = this.user = {
      email: formEmp.value.email
    }
    this.userEmployeeArray.push(user)
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
        this.addInformationIntoArray(csv.split(",\r\n"));
        }
      }
  }

  addInformationIntoArray(arrayString: Array<string>) {
    for (let i of arrayString) {
      let newUser = new UserEmail();
      newUser.email = i;
      this.userEmployeeArray.push(newUser);
    }
  }

  submitAll() {
    try {
      this.userService.massCreateUsers(this.userEmployeeArray);
    } catch (Exception) {
      console.log("Something is wrong with your stuff!")
    }
  }

  //  For Dropdown menu
  yes: boolean = false;

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

}
