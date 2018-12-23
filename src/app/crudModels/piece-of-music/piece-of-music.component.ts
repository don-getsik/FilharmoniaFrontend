import { Component, OnInit } from '@angular/core';
import {PIECEOFMUSICS} from '../../_mock/pieceOfMusic_mock';

@Component({
  selector: 'app-piece-of-music',
  templateUrl: './piece-of-music.component.html',
  styleUrls: ['./piece-of-music.component.css']
})
export class PieceOfMusicComponent implements OnInit {

  piecesOfMusics = PIECEOFMUSICS;
  constructor() { }

  ngOnInit() {
  }

}
