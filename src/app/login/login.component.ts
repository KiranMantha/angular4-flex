import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) {

    }

    public gotoApp():void {
        this.auth.setAuthToken('kiran');
        this.router.navigate(['/app', {outlets: {'appOutlet': ['dashboard']}}]);
    }

    ngOnInit(){
        console.log(this.route);
        this.route.queryParams.subscribe((params) => {
            if(params['logout'] && params['logout'] === 'true') {
                this.auth.removeAuthToken();
            }
        });
    }

}