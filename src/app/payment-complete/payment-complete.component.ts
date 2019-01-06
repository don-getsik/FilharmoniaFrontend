import { Component, OnInit } from '@angular/core';
import {PayPalService} from '../_services/pay-pal.service';

@Component({
  selector: 'app-payment-complete',
  templateUrl: './payment-complete.component.html',
  styleUrls: ['./payment-complete.component.css']
})
export class PaymentCompleteComponent implements OnInit {

  constructor(private ps: PayPalService) {}

  ngOnInit() {
    this.ps.completePayment(window.location.href.substring(38));
  }

}
