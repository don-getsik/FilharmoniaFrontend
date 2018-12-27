import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BudgetService} from '../../../crudServices/budget.service';

@Component({
  selector: 'app-budget-add',
  templateUrl: './budget-add.component.html',
  styleUrls: ['./budget-add.component.css']
})
export class BudgetAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BudgetService) {
    this.createForm();
  }



  createForm() {
    this.angForm = this.fb.group({
      sum: [0, Validators.required ],
      amount: [0, Validators.required ],
      title: ['', Validators.required ],
      details: ['', Validators.required ],
      date: ['', Validators.required ]
    });
  }

  get f() { return this.angForm.controls; }

  addBusiness(transaction_sum, amount, title, details, date) {
    this.bs.addTransaction(transaction_sum, amount, title, details, date);
  }

  ngOnInit() {
  }
}
