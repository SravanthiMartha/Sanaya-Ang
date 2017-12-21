import { Component } from '@angular/core';
import { TopService } from './top.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './topNav.component.html',
  styleUrls: ['./topNav.component.css'],
  providers:[TopService]
})
export class NavComponent {
  title = 'topNav';
  top:any;
  constructor(topservice: TopService){

    topservice.gettop()
    .then(res => this.top = res)


  }

}