import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {HomeModule} from './home.module' 
@Component({
    selector: 'todo',
    template: `<h1>todo example goes here</h1>
    <home></home>`
})
export class TodoComponent implements OnInit {
    name = 'App';
    name2:string;
    list = [];
    constructor() { 
        this.name2 = 'Angular2'
    }

    ngOnInit() { }

    add(title) {
        this.list.push({title: title.value, done: 'active'});
        title.value = '';
    }
    
    done(idx) {
        this.list[idx].done = this.list[idx].done ==='done' ? 'active': 'done';
    }
    
    remove(idx) {
        this.list.splice(idx,1);
    }
}
