import {NgModule} from '@angular/core';

import {TodoComponent} from './Todo.component';
import {TodoRoutingModule} from './Todo-routing.module';
import {CommonModule} from '@angular/common'
import {HomeModule} from './home.module' 

@NgModule({
  imports: [
    TodoRoutingModule,CommonModule, HomeModule],
  declarations: [TodoComponent],
  providers: [],
})
export class TodoModule {
}
