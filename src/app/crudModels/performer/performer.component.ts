import { Component, OnInit } from '@angular/core';
import {PERFORMERS} from '../../_mock/performer_mock';

@Component({
  selector: 'app-performer',
  templateUrl: './performer.component.html',
  styleUrls: ['./performer.component.css']
})
export class PerformerComponent implements OnInit {

  permormers = PERFORMERS;
  constructor() { }

  ngOnInit() {
  }

}
