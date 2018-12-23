import { Component, OnInit } from '@angular/core';
import {BudgetService} from '../../crudServices/budget.service';
import {Transaction} from '../../_models/transaction';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  transactions : Transaction[];
  constructor(private budgetService: BudgetService) {
  }

  ngOnInit() {
    this.transactions = this.budgetService.getTransactions();
  }

  deleteTransaction (t: Transaction) {
    this.budgetService.deleteTransaction(t);
  }
}
