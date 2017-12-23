import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'article',
    template: `<div>This is inside dashboard article component</div>`,
    providers: [ ]
})
export class ArticleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        
    }
}
