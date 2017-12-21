import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from '../topNav/topNav.component';
import {sideComponent}  from '../sideBar/sideBar.component';
import {footComponent} from '../footer/foot.component';
import {ContentComponent} from '../content/content.component'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    sideComponent,
    footComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
