import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  url = "https://reqres.in";

  displayResources = new BehaviorSubject<boolean>(false);
  
  constructor(private http:HttpClient) { }

    resources(){
      return this.http.get(this.url+'/api/unknown');
    }           
}
