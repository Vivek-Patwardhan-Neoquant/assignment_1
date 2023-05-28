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
    this.userData.displayUsers = true;
    this.resourceService.displayResources = false;
    console.log('User: '+this.userData.displayUsers);
    console.log('Resource: '+this.resourceService.displayResources);
    // this.displayUsers.next(true);
    // this.displayResources.next(false);
  }

  showResources(){
    console.log('Show Resources');
    this.userData.displayUsers = false;
    this.resourceService.displayResources = true;
    console.log('User: '+this.userData.displayUsers);
    console.log('Resource: '+this.resourceService.displayResources);
  }
}
