import { Component, OnInit } from '@angular/core';
import {CONCERTS} from '../../_mock/concert_mock';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  concerts = CONCERTS;
  constructor() { }

  ngOnInit() {
  }

}
