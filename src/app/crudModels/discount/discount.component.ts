import { Component, OnInit } from '@angular/core';
import {Discount} from '../../_models/discount';
import {DiscountService} from '../../crudServices/discount.service';
import {AlertService} from '../../_services';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  discounts: Discount[];

  constructor(private ds: DiscountService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.ds.getDiscounts().subscribe(data => this.discounts = data,
      error => this.alertService.error(error));
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  deleteDiscount(discount: Discount) {
    this.ds.deleteDiscount(discount.name).subscribe(data => this.alertService.success("Usunieto pomyślnie"),
      error => this.alertService.error(error));
    this.discounts.splice(this.discounts.indexOf(discount), 1);
  }
}
