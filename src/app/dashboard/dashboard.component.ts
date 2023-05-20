import { Component } from '@angular/core';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  users:any;
  constructor(private userData:UserDataService) {
    this.userData.users().subscribe((response:any)=>{
      console.log("data", response.data);
      this.users=response.data;
    })
  }
}
