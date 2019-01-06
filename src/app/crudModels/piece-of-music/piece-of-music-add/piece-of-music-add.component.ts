import { Component, OnInit } from '@angular/core';
import {PieceOfMusic} from '../../../_models/pieceOfMusic';
import {PieceOfMusicService} from '../../../crudServices/piece-of-music.service';
import {AlertService} from '../../../_services';

@Component({
  selector: 'app-piece-of-music-add',
  templateUrl: './piece-of-music-add.component.html',
  styleUrls: ['./piece-of-music-add.component.css']
})
export class PieceOfMusicAddComponent implements OnInit {
  pieceOfMusic: PieceOfMusic = new PieceOfMusic();

  constructor(private ps: PieceOfMusicService,
              private alertService: AlertService) { }

  addPieceOfMusic() {
    this.ps.editPieceOfMusic(this.pieceOfMusic).subscribe(data => window.location.href="http://localhost:4200/manage/PieceOfMusic",
      error => this.alertService.error(error));
  }

  ngOnInit() {
  }

}
