import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url = "https://reqres.in";
  
  constructor(private http:HttpClient) { }

  login(email: any = '', password: any = ''){
    return this.http.post(this.url+'/api/login', { email, password });
  }
}
