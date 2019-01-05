import { Component } from '@angular/core';
import { AuthenticationService } from './_services'
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

    isLoggedInAdmin() {
      return this.Auth.isLoggedAdmin();
    }

    isLoggedInApprover() {
      return this.Auth.isLoggedApprover();
    }

    getUserName() {
        return this.Auth.getUserName();
    }

    logOff() {
      this.Auth.logout();
      this.router.navigate(['']);
    }
}
