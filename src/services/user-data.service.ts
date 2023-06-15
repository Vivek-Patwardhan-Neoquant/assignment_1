import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  url = "https://reqres.in";

  displayUsers: boolean = true;
  pageIs: number = 1;
  userID: any;

  constructor(private http:HttpClient) { }

    users_list(){
      return this.http.get(this.url+'/api/users?page='+this.pageIs);
    }
}
