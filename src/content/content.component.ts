import { Component } from '@angular/core';
import { PriceService } from './price.service';

@Component({
  selector: 'content-nav',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers:[PriceService]
})
export class ContentComponent {
  title = 'content';
  currency = 'GBP';
  price: number;
  users: any;
  comments:any;
  
  constructor(priceService: PriceService) {
    priceService.getPrice(this.currency)
      .then(res => this.price = res);


    priceService.getUsers()
      .then(res => this.users = res)


    priceService.getComments()
      .then(res => this.comments = res)
    
}


}
