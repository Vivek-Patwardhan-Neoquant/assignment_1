import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  users_page_1:any;
  users_page_2:any;
  currentPage: number = 1;
  page1: any;
  page2: any;
  
  constructor(private userData:UserDataService, private router: Router) {
    this.userData.users_page1().subscribe((response:any)=>{
      this.users_page_1 = response.data;
      this.page1 = response.page;
    }),
    this.userData.users_page2().subscribe((response:any)=>{
      this.users_page_2 = response.data;
      this.page2 = response.page;
    }) 
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
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    // Write unsubscribe logic
  }
}
