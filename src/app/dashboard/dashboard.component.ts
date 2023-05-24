import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  users:any;
  
  constructor(private userData:UserDataService, private router: Router) {
    this.userData.users().subscribe((response:any)=>{
      this.users=response.data;
    })
  }

  onLogout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    // Write unsubscribe logic
  }
}
