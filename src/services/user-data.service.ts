import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  url = "https://reqres.in";

  displayUsers: boolean = true;

  constructor(private http:HttpClient) { }
    users_page1(){
      return this.http.get(this.url+'/api/users?page='+'1');
    }    

    users_page2(){
      return this.http.get(this.url+'/api/users?page='+'2');
    }    
}
