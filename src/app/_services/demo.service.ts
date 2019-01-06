import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  executeDemo() {
    this.http.get('http://localhost:8081/demo');
  }
}
