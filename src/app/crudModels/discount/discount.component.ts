import { Component, OnInit } from '@angular/core';
import {DISCOUNTS} from '../../_mock/discount_mock';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor() { }

  discounts = DISCOUNTS;

  ngOnInit() {
  }

}
