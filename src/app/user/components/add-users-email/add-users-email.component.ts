import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Batch } from '../../models/batch';
import { UserEmail } from '../../models/user-email';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-users-email',
  templateUrl: './add-users-email.component.html',
  styleUrls: ['./add-users-email.component.css'],
})
export class AddUsersEmailComponent implements OnInit {

  user:UserEmail = {
    email: "",
    batchId: undefined
  }

  //  For Dropdown menu
  yes: boolean = false;

  userEmployeeArray: Array<UserEmail> = [];

  batches?: Batch[];

  selectedBatch?: Batch;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllBatches();
  }

  isEmail(search:string):boolean {
      let  serchfind:boolean;

      let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      serchfind = regexp.test(search);

      return serchfind;
  }

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
  }

  onDeleteEmployee(user: UserEmail) {
    let i = 0;
    for (let u of this.userEmployeeArray) {
      if (u.email == user.email) {
        this.userEmployeeArray.splice(i, 1);
      }
      i++;
    }

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

  submitAll() {
    try {
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

  onSelectBatch(batchId:number) {
    for (let u of this.userEmployeeArray) {
      u.batchId = batchId;
    }
  }

  getAllBatches() {
    // logic to get all of the batches
    // Need to wait for merge with anakins, or whoever created the batch service
    // batches = batchService.getAllBatches();
  }

}
