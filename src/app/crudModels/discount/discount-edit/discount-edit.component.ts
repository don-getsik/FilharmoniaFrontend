import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: DiscountService,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      percentage: ['', Validators.required ]
    });
  }

  get f() { return this.angForm.controls; }

  updateDiscount(title, percentage) {
    this.bs.editDiscount(this.discount.id, title, parseFloat(percentage));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.discount = this.bs.getDiscount(params['id']);
    })
  }
}
