import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterContentChecked {

  checkMail:any;
  // page1: any;
  // page2: any;
  // currentUser: any;
  // currentUserEmail: any;
  // userList1Count: any;
  // userList2Count: any;
  // isShowResource: any;
  // isShowUsers: any;

  constructor(private router: Router) { }

  ngOnInit(): void { 
    this.checkMail = localStorage.getItem("checkEmail");    
  }

  ngAfterContentChecked(): void {
    // this.isShowUsers = this.userData.displayUsers;
    // this.isShowResource = this.resources.displayResources;
  }
  
  onLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("checkEmail");
    this.checkMail = '';
    // localStorage.removeItem("checkEmail");
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    // Write unsubscribe logic
  }
}
