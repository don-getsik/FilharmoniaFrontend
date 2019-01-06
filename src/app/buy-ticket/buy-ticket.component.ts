import { Component, OnInit } from '@angular/core';
import {DiscountService} from '../crudServices/discount.service';
import {Discount} from '../_models/discount';
import {SeatService} from '../crudServices/seat.service';
import {Seat} from '../_models/seat';
import {ActivatedRoute} from '@angular/router';
import {PurchaseTicket} from '../_models/PutchaseTicket';
import {SelectedSeat} from '../_models/SelectedSeat';
import {PayPalService} from '../_services/pay-pal.service';
import {AlertService} from '../_services';


class TicketSeat {
  row: number;
  position: number;
  id: number;
  isAvaible: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  private purchase: PurchaseTicket = new PurchaseTicket();
  private discounts: Discount[];
  private seats: TicketSeat[][];

  constructor(private ds: DiscountService,
              private ss: SeatService,
              private route: ActivatedRoute,
              private pps: PayPalService,
              private alertService: AlertService) {
    this.purchase.tickets = [];
  }

  selectSeat(ts: TicketSeat) {
    if (ts.isSelected) {
      ts.isSelected = false;
      let number = 0;
      while (this.purchase.tickets.length < number) {
        if(this.purchase.tickets[number].seatCol === ts.position && this.purchase.tickets[number++].seatRow === ts.row) break;
        else number++;
      }
      console.log(number);
      this.purchase.tickets.splice(number,1);
    }
    else if(ts.isAvaible) {
      ts.isSelected = true;
      this.purchase.tickets.push({seatRow: ts.row, seatCol: ts.position, discountName: this.discounts[0].name});
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  ngOnInit() {
    let id: string = "";
    this.route.params.subscribe(params => id = params['id']);
    this.ss.getSeats(id).subscribe(data => this.setSeats(data), this.alertService.error);
    this.ds.getDiscounts().subscribe(data => this.discounts = data, this.alertService.error);
    this.seats = [];
    this.fillSeats();
    this.purchase.concertId = parseInt(id);
  }

  private fillSeats() {
    for (let i = 0; i < 10; i++) {
      this.seats[i] = [];
      for (let j = 0; j < 10; j++) {
        this.seats[i][j] = new TicketSeat();
        this.seats[i][j].row = i;
        this.seats[i][j].position = j;
        this.seats[i][j].id = parseInt(i + '' + j);
        this.seats[i][j].isAvaible = false;
        this.seats[i][j].isSelected = false;
      }
    }
  }

  private setSeats(freeSeats: Seat[]) {
    for (let seat of freeSeats) {
      this.seats[seat.row - 1][seat.col - 1].isAvaible = true;
    }
  }

  setDiscount(column: SelectedSeat, d: string) {
    column.discountName = d;
  }

  private purchaseTicket() {
    this.pps.makePayment(this.purchase);
  }
}
