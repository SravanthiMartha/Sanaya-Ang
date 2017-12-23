import {Routes, RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule'
  },
  
  {
    path: 'article',
    loadChildren: '../article/article.module#ArticleModule'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
