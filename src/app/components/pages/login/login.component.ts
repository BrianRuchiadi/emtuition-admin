import { Component, OnInit } from '@angular/core';
import { Login } from './../../../classes/forms/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../styles/pages/_login.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: Login = new Login('','');
  public loginFormError: string = '';

  constructor() { }

  ngOnInit() {
  }

  public login(): void {
    this.loginFormError = '';
    // check all the required fields
    this.loginFormError = this.loginForm.checkRequired();

    // if there isn't any error, continue check the length required.
    if (!this.loginFormError) {
      this.loginFormError = this.loginForm.checkLength();
    }

    if (!this.loginFormError) {
      // handle form submission
    }
  }

}
