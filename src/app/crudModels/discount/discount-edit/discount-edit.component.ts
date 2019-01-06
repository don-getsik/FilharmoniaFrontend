import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Discount} from '../../../_models/discount';
import {DiscountService} from '../../../crudServices/discount.service';
import {AlertService} from '../../../_services';

@Component({
  selector: 'app-discount-edit',
  templateUrl: './discount-edit.component.html',
  styleUrls: ['./discount-edit.component.css']
})
export class DiscountEditComponent implements OnInit {
  discount: Discount = new Discount();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: DiscountService,
              private alertService: AlertService) {
  }

  updateDiscount() {
    this.bs.editDiscount(this.discount).subscribe(data => window.location.href="http://localhost:4200/manage/Discount",
      error => this.alertService.error(error));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.getDiscounts().subscribe(data => this.discount = data.find(d => d.name == params['id']),
        error => this.alertService.error(error));
    })
  }
}
