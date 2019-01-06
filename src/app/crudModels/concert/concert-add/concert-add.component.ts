import { Component, OnInit } from '@angular/core';
import {ConcertService} from '../../../crudServices/concert.service';
import {PerformerService} from '../../../crudServices/performer.service';
import {PieceOfMusic} from '../../../_models/pieceOfMusic';
import {Concert} from '../../../_models/concert';
import {PieceOfMusicService} from '../../../crudServices/piece-of-music.service';
import {Performer} from '../../../_models/performer';
import {AlertService} from '../../../_services';

@Component({
  selector: 'app-concert-add',
  templateUrl: './concert-add.component.html',
  styleUrls: ['./concert-add.component.css']
})
export class ConcertAddComponent implements OnInit {
  concert: Concert = new Concert();
  piece: PieceOfMusic;
  performers: Performer[];
  repertoire: PieceOfMusic[] =[];
  piecesOfMusic: PieceOfMusic[];

  constructor(private bs: ConcertService,
              private ps: PerformerService,
              private ms: PieceOfMusicService,
              private alertService: AlertService) {
    this.repertoire = [];
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  addToRepertoire () {
    if (this.piece != null) this.repertoire.push(this.piece);
  }

  deleteMusic(p: PieceOfMusic) {
    let index = this.repertoire.indexOf(p);
    this.repertoire.splice(index, 1);
    for(let _i = 0; _i < this.repertoire.length; _i++) {
      this.repertoire[_i].idPiece = _i + 1;
    }
  }

  addConcert() {
    if(this.concert.date.length === 16) this.concert.date = this.concert.date + ":00.000 UTC";
    else this.concert.date = this.concert.date + " UTC";
    this.concert.repertoire = this.repertoire;
    this.bs.editConcert(this.concert).subscribe(data => window.location.href='http://localhost:4200/manage/Concert');
  }

  ngOnInit() {
    this.ps.getPerformers().subscribe(data => this.performers = data, this.alertService.error);
    this.ms.getPieceOfMusics().subscribe(data => this.piecesOfMusic = data, this.alertService.error);
  }
}
