import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  private seats: number[][];
  constructor() {
    this.seats = [];

    for (let i = 0; i < 10; i++) {
      this.seats[i] = [];
      for (let j = 0; j < 10; j++) {
        this.seats[i][j] = 0;
      }
    }
  }



  ngOnInit() {
  }

}
