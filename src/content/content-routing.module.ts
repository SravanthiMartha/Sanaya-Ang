import {Routes, RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";
import { DialogComponent } from './model-dialog/dialog.component';
const routes: Routes = [
  {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    loadChildren: './ToDo/Todo.module#TodoModule'
  },
  {
    path: 'angular-form',
    loadChildren: './angular-form/angular-form.module#AngularFormModule'
  },
  {
    path: 'dialog',
    component: DialogComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule{}
