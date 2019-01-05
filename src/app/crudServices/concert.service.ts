import { Injectable } from '@angular/core';
import {Concert} from '../_models/concert';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../_services';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient, private as: AuthenticationService) {
  }

  editConcert(c: Concert) {
    this.http.post("http://localhost:8081/admin/concert", c);
  }

  deleteConcert (id: number) {
    return this.http.delete("http://localhost:8081/admin/concert/" +id);
  }

  getConcerts () {
    return this.http.get<Concert[]>("http://localhost:8081/concert");
  }

  getConcert (id: number) {
    return this.http.get<Concert>("http://localhost:8081/admin/concert/"+id);
  }

  getNotApprovedConcert () {
    return this.http.get<Concert[]>("http://localhost:8081/concert/not-approved");
  }

  getApprovedConcert () {
    return this.http.get<Concert[]>("http://localhost:8081/concert");
  }
}
