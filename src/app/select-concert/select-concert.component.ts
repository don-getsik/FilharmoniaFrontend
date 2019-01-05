import { Component, OnInit } from '@angular/core';
import {Concert} from '../_models/concert';
import {ConcertService} from '../crudServices/concert.service';
import {AlertService} from '../_services';

@Component({
  selector: 'app-select-concert',
  templateUrl: './select-concert.component.html',
  styleUrls: ['./select-concert.component.css']
})
export class SelectConcertComponent implements OnInit {

  constructor(private bc: ConcertService,
              private alertService: AlertService) { }

  parseDate(date: string) {
    return new Date(Date.parse(date.substring(0,23))).toLocaleString();
  }

  concerts: Concert [];
  ngOnInit() {
    this.bc.getApprovedConcert().subscribe(data => this.concerts = data, this.alertService.error);
  }

}
