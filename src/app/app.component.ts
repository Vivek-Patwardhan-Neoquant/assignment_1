import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment_1';
  showHeadnFoot: boolean = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(event['url'] == '/login' || event['url'] == '/') {
          this.showHeadnFoot = false;
        } else {
          this.showHeadnFoot = true;
        }
      }
    });
  }

  ngOnInit(): void {}
}
