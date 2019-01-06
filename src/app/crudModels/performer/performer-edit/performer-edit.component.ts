import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Performer} from '../../../_models/performer';
import {PerformerService} from '../../../crudServices/performer.service';
import {AlertService} from '../../../_services';

@Component({
  selector: 'app-performer-edit',
  templateUrl: './performer-edit.component.html',
  styleUrls: ['./performer-edit.component.css']
})
export class PerformerEditComponent implements OnInit {
  performer: Performer = new Performer();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: PerformerService,
              private alertService: AlertService) {
  }

  updatePerformer() {
    this.bs.editPerformer(this.performer).subscribe(data => window.location.href = 'http://localhost:4200/manage/Performer',
      error => this.alertService.error(error));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.getPerformers().subscribe(data => this.performer = data[params['id'] - 1],
        error => this.alertService.error(error));
    })
  }
}
