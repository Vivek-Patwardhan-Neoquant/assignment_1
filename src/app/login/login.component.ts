import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  loginToken:any;
  loginFormStatus = true;
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  loginErrorMsg: string = '';
  
  loginForm = new FormGroup ({
    email: new FormControl("", [ Validators.required, Validators.email ]),
    password: new FormControl("", [ Validators.minLength(0), Validators.maxLength(16) ])
  });

  constructor(private userData: UserDataService, private router: Router) {}
  
  ngOnInit() {
    localStorage.getItem("token");
    this.reloadUser();
  }

  onLogin() {    
    this.userData.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (response:any) => {
          if (response.token){
                this.loginToken = response.token;
                localStorage.setItem("token", this.loginToken);
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
      this.isUserLoggedIn.next(true);
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
