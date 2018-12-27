import { Injectable } from '@angular/core';
import {Ticket} from '../_models/ticket';
import {TICKETS} from '../_mock/ticket_mock';
import {Purchase} from '../_models/Purchase';
import {Discount} from '../_models/discount';
import {Concert} from '../_models/concert';
import {Seat} from '../_models/seat';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() {
  }

  tickets: Ticket[] = TICKETS;

  addTicket(purchase: Purchase,  discount: Discount,  concert: Concert,  seat: Seat) {
    let t: Ticket = {id: TICKETS.length, purchase:purchase, discount: discount, concert: concert, seat: seat};
    this.tickets.push(t);
  }

  editTicket(id: number, purchase: Purchase,  discount: Discount,  concert: Concert,  seat: Seat) {
    this.tickets = this.tickets.filter(e => e !== this.tickets.find(e => e.id === id));
    let t: Ticket = {id: id, purchase:purchase, discount: discount, concert: concert, seat: seat};
    this.tickets.push (t);
  }

  deleteTicket (t: Ticket) {
    this.tickets = this.tickets.filter(e => e !== this.tickets.find(e => e.id === t.id));
  }

  getTickets () {
    return this.tickets;
  }

  getTicket (id: number) {
    return this.tickets[id-1];
  }
}
