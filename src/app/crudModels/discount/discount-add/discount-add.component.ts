import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DiscountService} from '../../../crudServices/discount.service';

@Component({
  selector: 'app-discount-add',
  templateUrl: './discount-add.component.html',
  styleUrls: ['./discount-add.component.css']
})
export class DiscountAddComponent implements OnInit {


  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: DiscountService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      percentage: ['', Validators.required ]
    });
  }

  get f() { return this.angForm.controls; }

  addDiscount(title, percentage) {
    this.bs.addDiscount(title, percentage);
  }

  ngOnInit() {
  }
}
