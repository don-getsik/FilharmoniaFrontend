import { Injectable } from '@angular/core';
import {Transaction} from '../_models/transaction';
import {TRANSCTIONS} from '../_mock/budget_mock';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() {
  }

  transactions: Transaction[] = TRANSCTIONS;

  addTransaction(sum: number, amount: number, title: string, details: string, date: Date) {
    let t: Transaction = {id: TRANSCTIONS.length, sum: sum, amount: amount, title: title, details: details ,date: date};
    this.transactions.push(t);
  }

  editTransaction(id: number, sum: number, amount: number, title: string, details: string, date: Date) {
    this.transactions = this.transactions.filter(e => e !== this.transactions.find(e => e.id === id));
    let t: Transaction = {id: id, sum: sum, amount: amount, title: title, details: details ,date: date};
    this.transactions.push (t);
  }

  deleteTransaction (t: Transaction) {
    this.transactions = this.transactions.filter(e => e !== this.transactions.find(e => e.id === t.id));
  }

  getTransactions () {
    return this.transactions;
  }

  getTransaction (id: number) {
    return this.transactions[id];
  }
}
