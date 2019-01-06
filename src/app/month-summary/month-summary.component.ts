import { Component, OnInit } from '@angular/core';
import {FinanceService} from '../_services/finance.service';
import {MonthSummary} from '../_models/MonthSummary';
import {AlertService} from '../_services';

const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
];

@Component({
  selector: 'app-month-summary',
  templateUrl: './month-summary.component.html',
  styleUrls: ['./month-summary.component.css']
})
export class MonthSummaryComponent implements OnInit {
  monthSummary: MonthSummary;
  nowId: number;

  constructor(private fs: FinanceService,
              private alertService: AlertService) { }


  ngOnInit() {
  }

  getDate (id: number) {
    let date = new Date(Date.now());
    date.setMonth(date.getMonth()-id);
    return monthNames[date.getMonth()]+ " " + date.getFullYear();
  }

  getSummary(id:number) {
    this.nowId = id;
    let date = new Date(Date.now());
    date.setMonth(date.getMonth()-id);
    let month = date.getMonth();
    let year = date.getFullYear();
    this.fs.getSummary(month+1,year).subscribe(data => this.monthSummary = data,
      error =>  this.alertService.error(error));
  }

}
