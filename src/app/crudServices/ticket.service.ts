import { Injectable } from '@angular/core';
import {Ticket} from '../_models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() {
  }

  tickets: Ticket[];

  getTickets () {
    return this.tickets;
  }

}
