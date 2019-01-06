import {Component, OnInit} from '@angular/core';
import {ConcertService} from '../crudServices/concert.service';
import {AlertService} from '../_services';
import {Concert} from '../_models/concert';

@Component({
  selector: 'app-aprove-concert',
  templateUrl: './aprove-concert.component.html',
  styleUrls: ['./aprove-concert.component.css']
})
export class AproveConcertComponent implements OnInit {
  concerts: Concert [];

  constructor(private bc: ConcertService,
              private alertService: AlertService) {
  }

  parseDate(date: string) {
    return new Date(Date.parse(date.substring(0, 23))).toLocaleString();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  ngOnInit() {
    this.bc.getNotApprovedConcert().subscribe(data => this.concerts = data,
      error => this.alertService.error(error));
  }

  approve(c: Concert) {
    this.bc.approveConcert(c.idConcert).subscribe(data => {
        this.alertService.success('Zatwierdzono');
        this.concerts.splice(this.concerts.indexOf(c), 1);
      },
      error => this.alertService.error(error));
  }

  del(c: Concert) {
    this.bc.deleteNodApprovedConcert(c.idConcert).subscribe(data => {
        this.alertService.success('Usunieto');
        this.concerts.splice(this.concerts.indexOf(c), 1);
      },
      error => this.alertService.error(error));
  }
}
