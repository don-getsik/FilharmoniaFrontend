import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PurchaseTicket} from '../_models/PutchaseTicket';

@Injectable({
  providedIn: 'root'
})
export class PayPalService {

  constructor(private http: HttpClient) { }

  makePayment (pt: PurchaseTicket) {
    this.http.post('http://localhost:8081/paypal/payment/make', pt, {responseType: 'text'}).subscribe(data => window.location.href = data.toString());

  }
}
