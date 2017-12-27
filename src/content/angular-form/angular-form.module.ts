import {NgModule} from '@angular/core';

import {AngularFormComponent} from './angular-form.component';
import {AngularFormRoutingModule} from './angular-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    AngularFormRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [AngularFormComponent],
  providers: [],
})
export class AngularFormModule {
}
