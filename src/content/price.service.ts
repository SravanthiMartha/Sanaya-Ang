import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PriceService {

  private currentPriceUrl = 'http://api.coindesk.com/v1/bpi/currentprice.json';
  private usersUrl='https://jsonplaceholder.typicode.com/posts';
  private comUrl='https://jsonplaceholder.typicode.com/comments';
  constructor(private http: Http) { }

  getPrice(currency: string): Promise<number> {
    return this.http.get(this.currentPriceUrl).toPromise()
      .then(response => response.json().bpi[currency].rate);
  }

  getUsers(){
    return this.http.get(this.usersUrl).toPromise()
    .then(response => response.json());
  }
  getComments(){
    return this.http.get(this.comUrl).toPromise()
    .then(response => response.json());
  }

}

