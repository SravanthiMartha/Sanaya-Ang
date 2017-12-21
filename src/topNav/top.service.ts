import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TopService{
    private topUrl='https://jsonplaceholder.typicode.com/posts/2';
    constructor(private http: Http) { }

    gettop(){
        return this.http.get(this.topUrl).toPromise()
        .then(response => response.json());
      }


}