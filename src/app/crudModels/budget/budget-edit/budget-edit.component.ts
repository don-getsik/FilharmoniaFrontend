import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BudgetService} from '../../../crudServices/budget.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css']
})
export class BudgetEditComponent implements OnInit {

  angForm: FormGroup;
  transaction: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: BudgetService,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.transaction = this.bs.getTransaction(params['id']);
    });
  }

  get f() { return this.angForm.controls; }

  createForm() {
    this.angForm = this.fb.group({
      sum: [0, Validators.required ],
      amount: [0, Validators.required ],
      title: ['', Validators.required ],
      details: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  updateTransaction(sum: string, amount: string, title: string, details: string, date: string) {
    this.bs.editTransaction(this.transaction.id, parseFloat(sum), parseFloat(amount), title, details, new Date(date));
  }
}
