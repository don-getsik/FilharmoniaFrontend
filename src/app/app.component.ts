import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service'
import {Router} from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 

    constructor (private Auth: AuthenticationService, private router: Router) {
    }

    isLoggedIn() {
        return this.Auth.isLogged();
    }

    getUserName() {
        return this.Auth.getUserName();
    }

    logOff() {
      this.Auth.logout();
      this.router.navigate(['']);
    }
}
