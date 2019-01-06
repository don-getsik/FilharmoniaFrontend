import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../_services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLoggedAdmin()) {
          if(window.location.href.includes("http://localhost:4200/manage")) return true;
          else if(window.location.href.includes("http://localhost:4200/monthly")) return true;
          else if(window.location.href.includes("http://localhost:4200/concertSummary")) return true;
          else window.location.href = 'http://localhost:4200';
          return false;
        }

        else if (this.authService.isLoggedApprover()) {
          if(window.location.href.includes("http://localhost:4200/approve")) return true;
          else window.location.href = 'http://localhost:4200';
          return false;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
