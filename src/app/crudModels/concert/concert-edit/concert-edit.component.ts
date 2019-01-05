import { Component, OnInit } from '@angular/core';
import {ConcertService} from '../../../crudServices/concert.service';
import {PerformerService} from '../../../crudServices/performer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Concert} from '../../../_models/concert';
import {PieceOfMusic} from '../../../_models/pieceOfMusic';
import {PieceOfMusicService} from '../../../crudServices/piece-of-music.service';
import {Performer} from '../../../_models/performer';
import {AlertService} from '../../../_services';

@Component({
  selector: 'app-concert-edit',
  templateUrl: './concert-edit.component.html',
  styleUrls: ['./concert-edit.component.css']
})
export class ConcertEditComponent implements OnInit {

  concert: Concert = new Concert();
  piece: PieceOfMusic;
  repertoire: PieceOfMusic[] = [];
  performers: Performer[];
  piecesOfMusic: PieceOfMusic[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: ConcertService,
              private ps: PerformerService,
              private ms: PieceOfMusicService,
              private alertService: AlertService) {
  }


  trackByIndex(index: number, obj: any): any {
    return index;
  }

  updateConcert() {
    if(this.concert.date.length === 16) this.concert.date = this.concert.date + ":00.000 UTC";
    else this.concert.date = this.concert.date + " UTC";
    this.bs.editConcert(this.concert).subscribe(data => window.location.href='http://localhost:4200/manage/Concert',
      this.alertService.error);
  }

  addToRepertoire () {
    if(this.piece != null) this.repertoire.push(this.piece);
  }


  deleteMusic(p: PieceOfMusic) {
    let index = this.repertoire.indexOf(p);
    this.repertoire.splice(index, 1);
    for(let _i = 0; _i < this.repertoire.length; _i++) {
      this.repertoire[_i].idPiece = _i + 1;
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.getConcert(params['id']).subscribe(
        data => {
          data.date = data.date.substring(0,23);
          this.concert = data;
          this.repertoire = data.repertoire;},
        error => console.log(error));
    });

    this.ps.getPerformers().subscribe(data => this.performers = data, this.alertService.error);
    this.ms.getPieceOfMusics().subscribe(data => this.piecesOfMusic = data, this.alertService.error);
  }
}
