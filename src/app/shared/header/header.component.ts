import { Location } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  showBtnBack: boolean = false;

  constructor(private location: Location, private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(event['url'] == '/dashboard') {
          this.showBtnBack = false;
        } else {
          this.showBtnBack = true;
        }
      }
    });
  }
  
  ngOnInit(): void {
  }    

  goBack(): void {
    this.location.back();
  }
}
