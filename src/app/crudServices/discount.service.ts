import { Injectable } from '@angular/core';
import {Discount} from '../_models/discount';
import {DISCOUNTS} from '../_mock/discount_mock';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() {
  }

  discounts: Discount[] = DISCOUNTS;

  addDiscount(title: string, precentage: number) {
    let d: Discount = {id: DISCOUNTS.length, title: title, percentage: precentage};
    this.discounts.push(d);
  }

  editDiscount(id: number, title: string, precentage: number) {
    this.discounts = this.discounts.filter(e => e !== this.discounts.find(e => e.id === id));
    let d: Discount = {id: id, title: title, percentage: precentage};
    this.discounts.push (d);
  }

  deleteDiscount (d: Discount) {
    this.discounts = this.discounts.filter(e => e !== this.discounts.find(e => e.id === d.id));
  }

  getDiscounts () {
    return this.discounts;
  }

  getDiscount (id: number) {
    return this.discounts[id-1];
  }
}
