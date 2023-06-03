import { Component } from '@angular/core';
import { ResourceService } from 'src/services/resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {

  resourcesList: any;

  constructor(private resources: ResourceService) {

    this.resources.resources().subscribe((response:any)=>{
      this.resourcesList = response.data;
    })
  }

}
