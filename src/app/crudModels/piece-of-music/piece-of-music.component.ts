import { Component, OnInit } from '@angular/core';
import {PIECEOFMUSICS} from '../../_mock/pieceOfMusic_mock';
import {PieceOfMusic} from '../../_models/pieceOfMusic';
import {PieceOfMusicService} from '../../crudServices/piece-of-music.service';

@Component({
  selector: 'app-piece-of-music',
  templateUrl: './piece-of-music.component.html',
  styleUrls: ['./piece-of-music.component.css']
})
export class PieceOfMusicComponent implements OnInit {

  piecesOfMusics = PIECEOFMUSICS;
  constructor(private ps: PieceOfMusicService) { }

  ngOnInit() {
  }

  deletePerformer(pom: PieceOfMusic) {
    this.ps.deletePieceOfMusic(pom);
  }
}
