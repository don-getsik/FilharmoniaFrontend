import { Component, OnInit } from '@angular/core';
import {DiscountService} from '../../../crudServices/discount.service';
import {Discount} from '../../../_models/discount';

@Component({
  selector: 'app-discount-add',
  templateUrl: './discount-add.component.html',
  styleUrls: ['./discount-add.component.css']
})
export class DiscountAddComponent implements OnInit {

  private discount = new Discount();
  constructor(private bs: DiscountService) {
  }

  addDiscount() {
    this.bs.editDiscount(this.discount);
  }

  ngOnInit() {
  }
}
