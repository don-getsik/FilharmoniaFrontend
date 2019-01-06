import { Component, OnInit } from '@angular/core';
import {DiscountService} from '../../../crudServices/discount.service';
import {Discount} from '../../../_models/discount';
import {AlertService} from '../../../_services';

@Component({
  selector: 'app-discount-add',
  templateUrl: './discount-add.component.html',
  styleUrls: ['./discount-add.component.css']
})
export class DiscountAddComponent implements OnInit {
  private discount = new Discount();

  constructor(private bs: DiscountService,
              private alertService: AlertService) {
  }

  addDiscount() {
    this.bs.editDiscount(this.discount).subscribe(data => window.location.href="http://localhost:4200/manage/Discount",
      error => this.alertService.error(error));
  }

  ngOnInit() {
  }
}
