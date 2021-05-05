import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-users-email',
  templateUrl: './add-users-email.component.html',
  styleUrls: ['./add-users-email.component.css']
})
export class AddUsersEmailComponent implements OnInit {

  myForm?: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      emails: this.fb.array([])
    })
  }

  get emailForms() {
    return this.myForm?.get('emails') as FormArray
  }

  addEmail() {

    const email = this.fb.control("");

    this.emailForms.push(email);
  }


  deleteEmail(i:number) {
    this.emailForms.removeAt(i);
  }
}
