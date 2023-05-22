import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  users:any;
  loginToken:any;
  loginFormStatus = true;

  loginForm = new FormGroup ({
    email: new FormControl("", [ Validators.required, Validators.email ]),
    password: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ])
  });

  constructor(private userData: UserDataService, private router: Router) {}
  
  ngOnInit() {
    localStorage.getItem("token");
  }

  onLogin() {
    console.log("Login Form Submitted!");
    this.userData.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((response:any)=>{
     
      if (response.token){
        this.loginToken = response.token;
        console.log(this.loginToken);
        localStorage.setItem("token", this.loginToken);
        this.router.navigateByUrl('/dashboard');
      }
    })
  }

  get getterEmail() {
    return this.loginForm.get('email');
  }

  get getterPassword() {
    return this.loginForm.get('password');
  }
}

// In Auth guard logic.. if token exists in localstorage.. allow user to redirect to dash
// If not revert to login page.
// logout
// Handle errors for failed login
// integrate API for signup.
// after signup success.. redirect to login.
// Handle errors for failed signup
// add logout btn to dashboard
