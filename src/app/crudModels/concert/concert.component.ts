import { Component, OnInit } from '@angular/core';
import {Concert} from '../../_models/concert';
import {ConcertService} from '../../crudServices/concert.service';
import {AlertService} from '../../_services';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {
  concerts: Concert[];

  constructor(private cs: ConcertService,
              private alertService: AlertService) { }

  parseDate(date: string) {
    return new Date(Date.parse(date.substring(0,23))).toLocaleString();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  ngOnInit() {
    this.cs.getConcerts().subscribe(data => this.concerts = data,
      error => this.alertService.error(error));
  }

  deleteConcert(c: Concert) {
    this.cs.deleteConcert(c.idConcert).subscribe(data =>
      this.alertService.success("Pomyślnie usunięto"),
        error => this.alertService.error(error));
    this.concerts.splice(this.concerts.indexOf(c), 1);
  }

}
