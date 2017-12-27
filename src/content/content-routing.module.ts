import {Routes, RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule{}
