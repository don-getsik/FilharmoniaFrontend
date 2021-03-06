import { Component, OnInit } from '@angular/core';
import {Performer} from '../../_models/performer';
import {PerformerService} from '../../crudServices/performer.service';
import {AlertService} from '../../_services';

@Component({
  selector: 'app-performer',
  templateUrl: './performer.component.html',
  styleUrls: ['./performer.component.css']
})
export class PerformerComponent implements OnInit {
  performers: Performer[];

  constructor(private ps: PerformerService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.ps.getPerformers().subscribe(data => this.performers = data,
      error => this.alertService.error(error));
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  deletePerformer(performer: Performer) {
    this.ps.deletePerformer(performer).subscribe(data => this.alertService.success("Usunięto pomyślnie"),
      error => this.alertService.error(error));
    this.performers.splice(this.performers.indexOf(performer),1);
  }
}
