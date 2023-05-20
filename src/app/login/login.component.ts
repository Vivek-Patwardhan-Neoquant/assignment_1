import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  users:any;
  token:any;
  loginFormStatus = true;

  loginForm = new FormGroup ({
    // username: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(30) ]),
    email: new FormControl("", [ Validators.required, Validators.email ]),
    password: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ])
  });

  constructor(private userData:UserDataService) {}
  
  ngOnInit() {}

  onLogin() {
    console.log("Login Form Submitted!");
    console.log(this.loginForm.value);
    this.loginForm.reset();
    this.userData.login(JSON.stringify(this.loginForm.value.email), JSON.stringify(this.loginForm.value.password)).subscribe((response:any)=>{
      console.log("login token", response);
      this.token=response;
      console.log('token:'+this.token);
    })
  }

  // get getterUsername() {
  //   return this.loginForm.get('username');
  // }
  get getterEmail() {
    return this.loginForm.get('email');
  }
  get getterPassword() {
    return this.loginForm.get('password');
  }
}
