import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loginFormStatus = false;

  signupForm = new FormGroup ({
    username: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ]),
    email: new FormControl("", [ Validators.required, Validators.email ]),
    password: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ])
  });

  ngOnInit(): void {
    
  }

  onSignup() {
    console.log("Signup Form Submitted!");
    console.log(this.signupForm.value);
    this.signupForm.reset();
    // this.signupForm = new FormGroup ({
    //   username: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ]),
    //   email: new FormControl("", [ Validators.required, Validators.email ]),
    //   password: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ])
    // });
    // if(!this.signupForm.valid){
    //   return;
    // }
    // this.getterUsername?.patchValue('');
    // this.getterPassword?.patchValue('');
    // this.getterEmail?.patchValue('');
  }

  get getterUsername() {
    return this.signupForm.get('username');
  }
  get getterEmail() {
    return this.signupForm.get('email');
  }
  get getterPassword() {
    return this.signupForm.get('password');
  }
  // changeStatus() {
  //   this.loginFormStatus = true;
  // }
}
