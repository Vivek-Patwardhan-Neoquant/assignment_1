import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = "https://reqres.in";
  constructor(private http:HttpClient) { }
    users(){
      return this.http.get(this.url+'/api/users?page='+'1');
    }

    login(email: any = '', password: any = ''){
      return this.http.post(this.url+'/api/login', { email, password });
    }

    signup(email: any = '', password: any = ''){
      return this.http.post(this.url+'/api/register', { email, password });
    }
    // login(){
    //   return this.http.get(this.url+'/api/login');
    // }
}
