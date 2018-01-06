//our root app component
import {NgModule} from '@angular/core'

import {Home} from './home' 
import {CarouselModule} from 'angular2-carousel'


@NgModule({
  imports:[CarouselModule],
  declarations: [ Home ],
  // If we don't export the Home component it won't be visible to other modules
  exports: [ Home ]
})
export class HomeModule {}