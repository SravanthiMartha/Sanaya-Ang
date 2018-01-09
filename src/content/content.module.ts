import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ContentRoutingModule} from './content-routing.module';
import {DialogComponent} from './model-dialog/dialog.component';
@NgModule({
    imports: [ BrowserModule, ContentRoutingModule ],
    declarations: [ ContentModule, DialogComponent ],
    bootstrap: [ContentModule ]
  })
  export class ContentModule {}