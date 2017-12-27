import {NgModule} from '@angular/core';

import {TodoComponent} from './Todo.component';
import {TodoRoutingModule} from './Todo-routing.module';

@NgModule({
  imports: [
    TodoRoutingModule,
  ],
  declarations: [TodoComponent],
  providers: [],
})
export class TodoModule {
}
