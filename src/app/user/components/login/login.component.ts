import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * Only used for the HTML to display before clicking login to be redirected to Cognito hosted UI for logging in
 * @author Steven Ceglarek
 */
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
