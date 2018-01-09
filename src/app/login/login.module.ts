import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module'
import { LoginComponent } from "./login.component";
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {
}
