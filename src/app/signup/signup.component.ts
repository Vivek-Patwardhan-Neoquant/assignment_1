import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  regToken: any;
  userID: any;
  loginFormStatus = false;

  signupForm = new FormGroup ({
    email: new FormControl("", [ Validators.required, Validators.email ]),
    password: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ])
  });

  constructor (private userData: UserDataService) {}

  ngOnInit(): void {
    
  }

  onSignup() {
    console.log("Signup Form Submitted!");
    console.log(this.signupForm.value);
    this.userData.signup(this.signupForm.value.email, this.signupForm.value.password).subscribe((response: any)=>{
      this.regToken = response.token;
      this.userID = response.id;
      console.log(this.regToken, this.userID);
    })
    // this.signupForm = new FormGroup ({
    //   username: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ]),
    //   email: new FormControl("", [ Validators.required, Validators.email ]),
    //   password: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(16) ])
    // });
    // if(!this.signupForm.valid){
    //   return;
    // }    
  }

  get getterEmail() {
    return this.signupForm.get('email');
  }
  get getterPassword() {
    return this.signupForm.get('password');
  }
}
