import { Component } from '@angular/core';
import { ResourceService } from 'src/services/resource.service';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private userData: UserDataService, private resourceService: ResourceService) {}

  showUsers(){
    console.log('Show Users');
    this.userData.displayUsers.next(true);
    this.resourceService.displayResources.next(false);
    console.log('User'+this.userData.displayUsers.value);
    console.log('Resource'+this.resourceService.displayResources.value);
    // this.displayUsers.next(true);
    // this.displayResources.next(false);
  }

  showResources(){
    console.log('Show Resources');
    this.userData.displayUsers.next(false);
    this.resourceService.displayResources.next(true);
    console.log('User'+this.userData.displayUsers.value);
    console.log('Resource'+this.resourceService.displayResources.value);
  }
}
