import { NgModule } from '@angular/core';


import { DashboardComponent }   from './dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';



import { ArticleComponent } from'./article/article.component';

@NgModule({
    imports: [DashBoardRoutingModule ],
    exports: [],
    declarations: [DashboardComponent, ArticleComponent],
    providers: [],
})
export class DashboardModule {

}
