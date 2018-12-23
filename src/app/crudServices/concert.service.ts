import { Injectable } from '@angular/core';
import {Transaction} from '../_models/transaction';
import {TRANSCTIONS} from '../_mock/budget_mock';
import {Performer} from '../_models/performer';
import {Concert} from '../_models/concert';
import {CONCERTS} from '../_mock/concert_mock';
import {CONCERTROOM} from '../_mock/concertRoom_mock';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor() {
  }

  concerts: Concert[] = CONCERTS;

  addConcert(performer: Performer, title: string, organizationCosts: number, date: Date, ticketCosts: number) {
    let c: Concert = {id: CONCERTS.length, performers: performer, concertRoom: CONCERTROOM, title: title,
      organizationCosts: organizationCosts, date: date, ticketCosts:ticketCosts};
    this.concerts.push(c);
  }

  editConcert(id: number, performer: Performer, title: string, organizationCosts: number, date: Date, ticketCosts: number) {
    this.concerts = this.concerts.filter(e => e !== this.concerts.find(e => e.id === id));
    let c: Concert = {id: id, performers: performer, concertRoom: CONCERTROOM, title: title,
      organizationCosts: organizationCosts, date: date, ticketCosts:ticketCosts};
    this.concerts.push (c);
  }

  deleteConcert (c: Concert) {
    this.concerts = this.concerts.filter(e => e !== this.concerts.find(e => e.id === c.id));
  }

  getConcerts () {
    return this.concerts;
  }

  getConcert (id: number) {
    return this.concerts[id];
  }
}
