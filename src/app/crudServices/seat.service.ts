import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Seat} from '../_models/seat';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private http: HttpClient) { }

  getSeats (ConcertID: string){
    console.log('http://localhost:8081/free-seat/'+ConcertID);
    return this.http.get<Seat[]>('http://localhost:8081/free-seat/'+ConcertID);
  }
}
