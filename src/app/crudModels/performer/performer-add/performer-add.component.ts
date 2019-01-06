import { Component, OnInit } from '@angular/core';
import {PerformerService} from '../../../crudServices/performer.service';
import {Performer} from '../../../_models/performer';
import {AlertService} from '../../../_services';

@Component({
  selector: 'app-performer-add',
  templateUrl: './performer-add.component.html',
  styleUrls: ['./performer-add.component.css']
})
export class PerformerAddComponent implements OnInit {
  private performer: Performer = new Performer();

  constructor(private bs: PerformerService,
              private alertService: AlertService) {
  }

  addPerformer() {
    this.bs.editPerformer(this.performer).subscribe(data => window.location.href = 'http://localhost:4200/manage/Performer',
      error => this.alertService.error(error));
  }

  ngOnInit() {
  }
}
