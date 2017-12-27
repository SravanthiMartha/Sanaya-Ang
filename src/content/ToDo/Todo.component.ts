import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo',
    template: `<h1>todo example goes here</h1>`
})
export class TodoComponent implements OnInit {
    name = 'App';
    list = [];
    constructor() { }

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
