import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { SignupServiceService } from 'src/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  regToken: any = '';
  userID: any = '';
  loginFormStatus = false;
  signupErrorMsg = '';

  signupForm = new FormGroup ({
    email: new FormControl("", [ Validators.required, Validators.email ]),
    password: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ])
  });

  constructor ( private signUpService: SignupServiceService, 
                private router: Router) {}

  ngOnInit(): void {
    
  }

  onSignup() {
    console.log("Signup Form Submitted!");
    console.log(this.signupForm.value);
    this.signUpService.signup(this.signupForm.value.email, this.signupForm.value.password).subscribe({

      next: (response:any) => {
        if (response.token){
          this.regToken = response.token;
          this.userID = JSON.stringify(response.id);
          this.router.navigateByUrl('/login');
        }
      },
      error: (error: HttpErrorResponse) => {
      this.signupErrorMsg = error.message;
      console.error('There was an error! '+this.signupErrorMsg);
      }
    })   
  }

  get getterEmail() {
    return this.signupForm.get('email');
  }
  get getterPassword() {
    return this.signupForm.get('password');
  }

  ngOnDestroy(): void {
    this.regToken = '';
    this.userID = '';    
    // Write unsubscribe logic
  }

}
