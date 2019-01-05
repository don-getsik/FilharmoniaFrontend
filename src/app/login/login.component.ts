import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';
import {Login} from '../_models/login';

@Component({templateUrl: 'login.component.html',
styleUrls: ['login.component.css']})
export class LoginComponent implements OnInit {
    loading = false;
    submitted = false;
    returnUrl: string;
    private login: Login = new Login();
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit() {
        this.submitted = true;

        this.loading = true;
        this.authenticationService.login(this.login)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
