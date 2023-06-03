import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  url = "https://reqres.in";
  
  constructor(private http:HttpClient) { }

  signup(email: any = '', password: any = ''){
    return this.http.post(this.url+'/api/register', { email, password });
  }
}
