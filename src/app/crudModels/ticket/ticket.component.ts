import { Component, OnInit } from '@angular/core';
import {TICKETS} from '../../_mock/ticket_mock';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets = TICKETS;
  constructor() { }

  ngOnInit() {
  }

}
