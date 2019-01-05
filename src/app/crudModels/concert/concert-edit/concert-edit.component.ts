import { Component, OnInit } from '@angular/core';
import {ConcertService} from '../../../crudServices/concert.service';
import {PerformerService} from '../../../crudServices/performer.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Concert} from '../../../_models/concert';
import {PieceOfMusic} from '../../../_models/pieceOfMusic';
import {PieceOfMusicService} from '../../../crudServices/piece-of-music.service';
import {Performer} from '../../../_models/performer';

@Component({
  selector: 'app-concert-edit',
  templateUrl: './concert-edit.component.html',
  styleUrls: ['./concert-edit.component.css']
})
export class ConcertEditComponent implements OnInit {

  concert: Concert = new Concert();
  piece: PieceOfMusic;
  repertoire: PieceOfMusic[] = [];
  private performers: Performer[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: ConcertService,
              private ps: PerformerService,
              private ms: PieceOfMusicService) {
  }


  trackByIndex(index: number, obj: any): any {
    return index;
  }

  updateConcert() {
    this.bs.editConcert(this.concert);
  }

  addToRepertoire () {
    let ps = new PieceOfMusic();
    ps.idPiece = this.repertoire.length+1;
    this.repertoire.push(ps);
  }

  deleteMusic(p: PieceOfMusic) {
    let index = this.repertoire.indexOf(p);
    this.repertoire.splice(index, 1);
    for(let _i = 0; _i < this.repertoire.length; _i++) {
      this.repertoire[_i].idPiece = _i + 1;
    }
  }

  setMusic(pom: PieceOfMusic) {
    this.piece = pom;
  }

  getPiecesOfMusic() {
    this.ms.getPieceOfMusics();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.getConcert(params['id']).subscribe(
        data => {
          this.concert = data;
          this.repertoire = data.repertoire;},
        error => console.log(error));
    });

    this.ps.getPerformers().subscribe(data => this.performers = data);
  }
}
