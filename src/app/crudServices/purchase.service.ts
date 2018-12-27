import { Injectable } from '@angular/core';
import {Performer} from '../_models/performer';
import {PERFORMERS} from '../_mock/performer_mock';
import {Purchase} from '../_models/Purchase';
import {PURCHASES} from '../_mock/purchase_mock';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor() {
  }

  purchases: Purchase[] = PURCHASES;

  getPurchases () {
    return this.purchases;
  }

  getPurchase (id: number) {
    return this.purchases[id-1];
  }
}
