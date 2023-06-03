import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  url = "https://reqres.in";

  displayResources: boolean = false;

  constructor(private http:HttpClient) { }

    resources(){
      return this.http.get(this.url+'/api/unknown');
    }           
}
