import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from 'src/services/resource.service';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterContentChecked {
  users_page_1:any;
  users_page_2:any;
  currentPage: number = 1;
  page1: any;
  page2: any;
  currentUser: any;
  currentUserEmail: any;
  userList1Count: any;
  userList2Count: any;
  isShowResource: any;
  isShowUsers: any;

  constructor(private userData:UserDataService, private resources: ResourceService, private router: Router) {

    this.userData.users_page1().subscribe((response:any)=>{
      this.users_page_1 = response.data;
      this.page1 = response.page;
      this.userList1Count = response.data.length;
      // console.log('users data 1 '+this.users_page_1[0].first_name);
      // console.log('UserList Count: '+this.userList1Count);
      for(let i=0;i<=this.userList1Count;i++){
        // console.log('EmailID of UserID '+this.users_page_1[i].id+' is: '+this.users_page_1[i].email);
        if(JSON.stringify(localStorage.getItem("checkEmail")) == JSON.stringify(this.users_page_1[i].email)){
          this.currentUser = this.users_page_1[i].first_name+' '+this.users_page_1[i].last_name;
          // console.log('Current user is: '+this.users_page_1[i].first_name+' '+this.users_page_1[i].last_name);
        }
        // console.log('no user');
      }
    }),

    this.userData.users_page2().subscribe((response:any)=>{
      this.users_page_2 = response.data;
      this.page2 = response.page;
      this.userList2Count = response.data.length;
      // console.log('users data 2 '+this.users_page_2[0].first_name);
      // console.log('UserList Count: '+this.userList2Count);
      for(let i=0;i<=this.userList2Count;i++){
        // console.log('EmailID of UserID '+this.users_page_2[i].id+' is: '+this.users_page_2[i].email);
        if(JSON.stringify(localStorage.getItem("checkEmail")) == JSON.stringify(this.users_page_2[i].email)){
          this.currentUser = this.users_page_2[i].first_name+' '+this.users_page_2[i].last_name;
          // console.log('Current user is: '+this.users_page_2[i].first_name+' '+this.users_page_2[i].last_name);
        }
      }
    })
  }

  ngOnInit(): void {
    this.currentUserEmail = localStorage.getItem("checkEmail");
    
    // console.log('users data 1 '+this.users_page_1);
    // console.log('users data 2 '+this.users_page_2);
  }

  ngAfterContentChecked(): void {
    this.isShowUsers = this.userData.displayUsers;
    this.isShowResource = this.resources.displayResources;
  }

  pageCount(x:any){
    this.currentPage = x;    
  }

  pageCountPre(){
    if(this.currentPage == 2){
      this.currentPage--;
    }
    this.currentPage = 1;
  }

  pageCountNext(){
    if(this.currentPage == 1){
      this.currentPage++;
    }
    this.currentPage = 2;
  }

  onLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("checkEmail");
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    // Write unsubscribe logic
  }
}
