import { Injectable } from '@angular/core';
import {Concert} from '../_models/concert';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient) {
  }

  editConcert(c: Concert) {
    return this.http.post("http://localhost:8081/admin/concert", c);
  }

  deleteConcert (id: number) {
    return this.http.delete("http://localhost:8081/admin/concert/" +id);
  }

  deleteNodApprovedConcert (id: number) {
    return this.http.delete("http://localhost:8081/concert/not-approved/" +id);
  }

  getConcerts () {
    return this.http.get<Concert[]>("http://localhost:8081/admin/concert");
  }

  getConcert (id: number) {
    return this.http.get<Concert>("http://localhost:8081/admin/concert/"+id);
  }

  getNotApprovedConcert () {
    return this.http.get<Concert[]>("http://localhost:8081/concert/not-approved");
  }

  approveConcert (id: number) {
    return this.http.put("http://localhost:8081/concert/approve?id="+id, "");
  }

  getApprovedConcert () {
    return this.http.get<Concert[]>("http://localhost:8081/concert/approved");
  }
}
