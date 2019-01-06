import { Component, OnInit } from '@angular/core';
import {ConcertSummaryList} from '../_models/ConcertSummaryList';
import {FinanceService} from '../_services/finance.service';
import {AlertService} from '../_services';
import {ConcertSummary} from '../_models/ConcertSummary';

@Component({
  selector: 'app-concert-summary',
  templateUrl: './concert-summary.component.html',
  styleUrls: ['./concert-summary.component.css']
})
export class ConcertSummaryComponent implements OnInit {
  concerts: ConcertSummaryList[] = [];
  concert: ConcertSummary;
  activeId: number;

  constructor(private fs: FinanceService,
              private as: AlertService) {
  }

  ngOnInit() {
    this.fs.getConcerts().subscribe(data => this.concerts = data,
      error => this.as.error(error));
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  setConcert(idConcert: number) {
    this.activeId = idConcert;
    this.fs.getConcert(idConcert).subscribe(data => this.concert = data,error1 => this.as.error(error1));
  }
}
