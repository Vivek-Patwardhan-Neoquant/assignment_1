import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit{

  usersList:any;
  totalPages:any;
  pageButtons: Array<Number> = [];
  currentPage: number = 1;

  constructor(private userData:UserDataService) { }

  ngOnInit(): void {
    this.userData.users_list().subscribe((response:any)=>{
      this.usersList = response.data;
      this.totalPages = response.total_pages;
      this.currentPage = response.page;
      for(let i=1;i<=this.totalPages;i++){
        this.pageButtons.push(i);
      }
    });
  }

  pageCount(x:any){
    this.userData.pageIs = x;    
    this.userData.users_list().subscribe((response:any)=>{
      this.usersList = response.data;
    });
  }

  pageCountPre(){    
    if(this.userData.pageIs > 1){
      this.userData.pageIs--;
    }
    this.userData.pageIs = 1;
    this.userData.users_list().subscribe((response:any)=>{
      this.usersList = response.data;
    });
  }

  pageCountNext(){
    if(this.userData.pageIs < this.totalPages){
      this.userData.pageIs++;
    }
    this.userData.pageIs = this.totalPages;
    this.userData.users_list().subscribe((response:any)=>{
      this.usersList = response.data;
    });
  }

}

