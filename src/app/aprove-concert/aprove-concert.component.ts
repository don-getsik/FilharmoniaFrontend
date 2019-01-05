import { Component, OnInit } from '@angular/core';
import {ConcertService} from '../crudServices/concert.service';
import {AlertService} from '../_services';
import {Concert} from '../_models/concert';

@Component({
  selector: 'app-aprove-concert',
  templateUrl: './aprove-concert.component.html',
  styleUrls: ['./aprove-concert.component.css']
})
export class AproveConcertComponent implements OnInit {
  constructor(private bc: ConcertService,
              private alertService: AlertService) { }

  parseDate(date: string) {
    return new Date(Date.parse(date.substring(0,23))).toLocaleString();
  }

  concerts: Concert [];
  ngOnInit() {
    this.bc.getNotApprovedConcert().subscribe(data => this.concerts = data, this.alertService.error);
  }

  approve(c: Concert) {

  }

  del(c: Concert) {

  }
}
