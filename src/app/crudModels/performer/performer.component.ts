import { Component, OnInit } from '@angular/core';
import {Performer} from '../../_models/performer';
import {PerformerService} from '../../crudServices/performer.service';

@Component({
  selector: 'app-performer',
  templateUrl: './performer.component.html',
  styleUrls: ['./performer.component.css']
})
export class PerformerComponent implements OnInit {

  performers: Performer[];
  constructor(private ps: PerformerService) { }

  ngOnInit() {
    this.performers = this.ps.getPerformers();
  }

  deletePerformer(performer: Performer) {
    this.ps.deletePerformer(performer);
  }
}
