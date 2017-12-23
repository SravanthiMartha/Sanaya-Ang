import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<div class="dashboard">
    <div>dashboard</div>
    <router-outlet></router-outlet>
  </div>`,
  providers: []
})
export class DashboardComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

  }

}
