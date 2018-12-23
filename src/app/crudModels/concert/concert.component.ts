import { Component, OnInit } from '@angular/core';
import {CONCERTS} from '../../_mock/concert_mock';
import {Concert} from '../../_models/concert';
import {ConcertService} from '../../crudServices/concert.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  concerts: Concert[];
  constructor(private cs: ConcertService) { }

  ngOnInit() {
    this.concerts = this.cs.getConcerts();
  }

  deleteConcert(c: Concert) {
    this.cs.deleteConcert(c);
  }

}
