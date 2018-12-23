import { Component, OnInit } from '@angular/core';
import {DISCOUNTS} from '../../_mock/discount_mock';
import {Discount} from '../../_models/discount';
import {DiscountService} from '../../crudServices/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor(private ds: DiscountService) { }

  discounts: Discount[];

  ngOnInit() {
    this.discounts = this.ds.getDiscounts();
  }

  deleteDiscount(discount: Discount) {
    this.ds.deleteDiscount(discount);
  }
}
