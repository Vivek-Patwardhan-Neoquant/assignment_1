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

  
}
