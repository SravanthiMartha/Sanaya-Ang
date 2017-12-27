import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularFormComponent } from './angular-form.component';

const routes: Routes = [
  { path: '', component: AngularFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularFormRoutingModule { }

export const routedComponents = [AngularFormComponent];
