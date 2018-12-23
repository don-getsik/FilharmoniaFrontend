import { Injectable } from '@angular/core';
import {PieceOfMusic} from '../_models/pieceOfMusic';
import {PIECEOFMUSICS} from '../_mock/pieceOfMusic_mock';

@Injectable({
  providedIn: 'root'
})
export class PieceOfMusicService {

  constructor() {
  }

  pieceOfMusics: PieceOfMusic[] = PIECEOFMUSICS;

  addPieceOfMusic(title: string, composer: string) {
    let p: PieceOfMusic = {id: PIECEOFMUSICS.length, title:title, composer:composer};
    this.pieceOfMusics.push(p);
  }

  editPieceOfMusic(id: number, title: string, composer: string) {
    this.pieceOfMusics = this.pieceOfMusics.filter(e => e !== this.pieceOfMusics.find(e => e.id === id));
    let p: PieceOfMusic = {id: id, title:title, composer:composer};
    this.pieceOfMusics.push (p);
  }

  deletePieceOfMusic (p: PieceOfMusic) {
    this.pieceOfMusics = this.pieceOfMusics.filter(e => e !== this.pieceOfMusics.find(e => e.id === p.id));
  }

  getPieceOfMusics () {
    return this.pieceOfMusics;
  }

  getPieceOfMusic (id: number) {
    return this.pieceOfMusics[id];
  }
}
