import { Component, OnInit } from '@angular/core';
import {PieceOfMusic} from '../../_models/pieceOfMusic';
import {PieceOfMusicService} from '../../crudServices/piece-of-music.service';
import {AlertService} from '../../_services';

@Component({
  selector: 'app-piece-of-music',
  templateUrl: './piece-of-music.component.html',
  styleUrls: ['./piece-of-music.component.css']
})
export class PieceOfMusicComponent implements OnInit {
  piecesOfMusic: PieceOfMusic[] = [];

  constructor(private ps: PieceOfMusicService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.ps.getPieceOfMusics().subscribe(data => this.piecesOfMusic = data,
      error => this.alertService.error(error));
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  deleteDiscount(pieceOfMusic: PieceOfMusic) {
    this.ps.deletePieceOfMusic(pieceOfMusic.idPiece).subscribe(data => this.alertService.success("Usunięto pomyśłnie")),
    error => this.alertService.error(error);
    this.piecesOfMusic.splice(this.piecesOfMusic.indexOf(pieceOfMusic),1);
  }
}
