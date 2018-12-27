import { Injectable } from '@angular/core';
import {Seat} from '../_models/seat';
import {SEATS} from '../_mock/seat_mock';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor() { }

  seats: Seat[] = SEATS;

  getSeats () {
    return this.seats;
  }

  getSeat (id: number) {
    return this.seats[id-1];
  }
}
