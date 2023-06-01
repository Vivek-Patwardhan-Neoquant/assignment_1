import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
import { LoginServiceService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  loginToken:any;
  loginFormStatus = true;
  // isUserLoggedIn = new BehaviorSubject<boolean>(false);
  loginErrorMsg: string = '';
  checkEmail: any;
  
  loginForm = new FormGroup ({
    email: new FormControl("", [ Validators.required, Validators.email ]),
    password: new FormControl("", [ //Validators.required, 
      Validators.minLength(0), Validators.maxLength(16) ])
  });

  constructor(private loginService: LoginServiceService, private router: Router) {}
  
  ngOnInit() {
    localStorage.getItem("token");
    this.reloadUser();
  }

  onLogin() {    
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (response:any) => {
          if (response.token){
                this.loginToken = response.token;
                this.checkEmail = this.loginForm.value.email;
                localStorage.setItem("token", this.loginToken);
                localStorage.setItem("checkEmail",this.checkEmail);
                this.router.navigateByUrl('/dashboard');
              }
          },
        error: (error: HttpErrorResponse) => {
            this.loginErrorMsg = error.message;
            console.error('There was an error! '+this.loginErrorMsg);
        }
    })
  }

  reloadUser() {
    if (localStorage.getItem('token')){
      // this.isUserLoggedIn.next(true);
      this.router.navigateByUrl('/dashboard');
    }
  }

  get getterEmail() {
    return this.loginForm.get('email');
  }

  get getterPassword() {
    return this.loginForm.get('password');
  }

  ngOnDestroy(){
    // Write unsubscribe logic
  }
}

// interceptors
// RXJs operators, Obervables, BehaviourSubject
// Resolvers
// parent-child components and event binding across components
// Route parameters to bind
// Router outlet for header navbar
// Custom pipes and custom directives