import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MonthSummary} from '../_models/MonthSummary';
import {ConcertSummaryList} from '../_models/ConcertSummaryList';
import {ConcertSummary} from '../_models/ConcertSummary';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http: HttpClient) { }

  getSummary (month: number, year: number){
    return this.http.get<MonthSummary>("http://localhost:8081/admin/finance/month-summary?month="+month+"&year="+year);
  }

  getConcerts() {
    return this.http.get<ConcertSummaryList[]>("http://localhost:8081/admin/finance/summary-list");
  }

  getConcert(id: number) {
    return this.http.get<ConcertSummary>("http://localhost:8081/admin/finance/concert/"+id);

  }
}
