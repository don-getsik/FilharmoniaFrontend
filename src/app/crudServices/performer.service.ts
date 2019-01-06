import { Injectable } from '@angular/core';
import {Performer} from '../_models/performer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerformerService {

  constructor(private http: HttpClient) {
  }

  editPerformer(cp: Performer) {
    return this.http.post("http://localhost:8081/admin/performer", cp);
  }

  deletePerformer (id: Performer) {
    return this.http.delete("http://localhost:8081/admin/performer/"+id.idPerformers);
  }

  getPerformers () {
    return this.http.get<Performer[]>("http://localhost:8081/admin/performer");
  }
}
