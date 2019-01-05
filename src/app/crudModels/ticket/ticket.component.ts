import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../_models/ticket';
import {TicketService} from '../../crudServices/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets: Ticket[];
  constructor(private ts: TicketService) { }

  ngOnInit() {
    this.tickets = this.ts.getTickets()
  }

}
