import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Discount} from '../../../_models/discount';
import {DiscountService} from '../../../crudServices/discount.service';

@Component({
  selector: 'app-discount-edit',
  templateUrl: './discount-edit.component.html',
  styleUrls: ['./discount-edit.component.css']
})
export class DiscountEditComponent implements OnInit {

  discount: Discount;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: DiscountService) {
  }

  updateDiscount() {
    this.bs.editDiscount(this.discount);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.getDiscounts().subscribe(data => this.discount = data[params['id']]);
    })
  }
}
