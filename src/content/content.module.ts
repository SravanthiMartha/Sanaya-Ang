import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ContentRoutingModule} from './content-routing.module';

@NgModule({
    imports: [ BrowserModule, ContentRoutingModule ],
    declarations: [ ContentModule ],
    bootstrap: [ContentModule ]
  })
  export class ContentModule {}