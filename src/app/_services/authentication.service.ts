import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Login} from '../_models/login';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(login: Login) {
        return this.http.post(`http://localhost:8081/login`, login, {observe: 'response'})
            .pipe(map(resp => {
                // login successful if there's a jwt token in the response
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
              console.log(resp.headers.keys());
              if(resp.headers.get("Authorization")) {
                    localStorage.setItem('Authorization', resp.headers.get("Authorization"));
                  localStorage.setItem('currentUser', login.email);
              }
                return login;
            }));
    }

    isLogged() {
        return localStorage.getItem('currentUser') != null;
    }

    isLoggedAdmin() {
      if (localStorage.getItem('currentUser') != null)
        return localStorage.getItem('currentUser') === "admin@filharmonia.pl";
      else return false;
    }

  isLoggedApprover() {
    if (localStorage.getItem('currentUser') != null)
      return localStorage.getItem('currentUser') === "approver@filharmonia.pl";
    else return false;
  }

    logout() {
        // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('Authorization');
    }

    getUserName() {
      if (localStorage.getItem('currentUser') === "admin@filharmonia.pl") return "administratorze";
      if (localStorage.getItem('currentUser') === "approver@filharmonia.pl") return "zatwierdzicielu";
      else return "nieznajomy";
    }
}
