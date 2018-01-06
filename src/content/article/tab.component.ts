import { Component, Input, OnInit } from '@angular/core';
import { Tab } from './tab.interface';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'my-tab',
  template:`<div [hidden]="!selected">
  <ng-content></ng-content>
</div>
` 
})
export class TabComponent implements OnInit, Tab {
  
  @Input() tabTitle;
  
  constructor(private tabsComponent: TabsComponent) {}
  
  ngOnInit() {
    this.tabsComponent.addTab(this);
  }
}