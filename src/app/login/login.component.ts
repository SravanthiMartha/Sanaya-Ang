import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
    username='';
    password='';
    constructor(private router: Router) { }

    ngOnInit() { }
    validateUser(){
        if(this.username === 'sanaya' && this.password === 'sanaya'){
            this.router.navigate(["/dashboard"]);
        }
        
    }
}
