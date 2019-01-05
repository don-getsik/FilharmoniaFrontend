import { Component, OnInit } from '@angular/core';
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
    this.cs.getConcerts().subscribe(data => this.concerts = data);
  }

  deleteConcert(c: Concert) {
    this.cs.deleteConcert(c.idConcert);
  }

}
