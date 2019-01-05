import { Component, OnInit } from '@angular/core';
import {Concert} from '../_models/concert';
import {ConcertService} from '../crudServices/concert.service';

@Component({
  selector: 'app-select-concert',
  templateUrl: './select-concert.component.html',
  styleUrls: ['./select-concert.component.css']
})
export class SelectConcertComponent implements OnInit {

  constructor(private bc: ConcertService) { }

  concerts: Concert [];
  ngOnInit() {
    this.bc.getApprovedConcert().subscribe(data =>  {console.log(data); this.concerts = data});
  }

}
