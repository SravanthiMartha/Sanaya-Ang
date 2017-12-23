import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from '../topNav/topNav.component';
import {sideComponent}  from '../sideBar/sideBar.component';
import {footComponent} from '../footer/foot.component';
import {ContentComponent} from '../content/content.component'

import {AppRoutingModule} from '../content/app-routing.module';
import { AuthGuard } from '../dashboard/auth.guard';

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
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
