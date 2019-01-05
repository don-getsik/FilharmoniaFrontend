import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {ConcertService} from '../../../crudServices/concert.service';
import {PerformerService} from '../../../crudServices/performer.service';
import {PieceOfMusic} from '../../../_models/pieceOfMusic';
import {Concert} from '../../../_models/concert';
import {PieceOfMusicService} from '../../../crudServices/piece-of-music.service';

@Component({
  selector: 'app-concert-add',
  templateUrl: './concert-add.component.html',
  styleUrls: ['./concert-add.component.css']
})
export class ConcertAddComponent implements OnInit {


  concert: Concert = new Concert();
  piece: PieceOfMusic;
  repertoire: PieceOfMusic[];
  constructor(private bs: ConcertService, private ps: PerformerService, private ms: PieceOfMusicService) {
    this.repertoire = [];
  }


  trackByIndex(index: number, obj: any): any {
    return index;
  }

  addToRepertoire () {
    this.repertoire.push(this.piece);
  }

  deleteMusic(p: PieceOfMusic) {
    let index = this.repertoire.indexOf(p);
    this.repertoire.splice(index, 1);
    for(let _i = 0; _i < this.repertoire.length; _i++) {
      this.repertoire[_i].idPiece = _i + 1;
    }
  }

  getPiecesOfMusic() {
    this.ms.getPieceOfMusics();
  }

  addConcert() {
    this.bs.editConcert(this.concert);
  }

  getPerformers() {
    return this.ps.getPerformers();
  }

  ngOnInit() {
  }

  setMusic(pom: PieceOfMusic) {
    this.piece = pom;
  }
}
