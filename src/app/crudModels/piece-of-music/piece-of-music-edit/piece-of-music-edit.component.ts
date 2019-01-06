import { Component, OnInit } from '@angular/core';
import {PieceOfMusic} from '../../../_models/pieceOfMusic';
import {PieceOfMusicService} from '../../../crudServices/piece-of-music.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../_services';

@Component({
  selector: 'app-piece-of-music-edit',
  templateUrl: './piece-of-music-edit.component.html',
  styleUrls: ['./piece-of-music-edit.component.css']
})
export class PieceOfMusicEditComponent implements OnInit {
  pieceOfMusic: PieceOfMusic = new PieceOfMusic();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ps: PieceOfMusicService,
              private alertService: AlertService) {

  }

  updatePieceOfMusic() {
    this.ps.editPieceOfMusic(this.pieceOfMusic).subscribe(data => window.location.href="http://localhost:4200/manage/PieceOfMusic",
      error => this.alertService.error(error));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.getPieceOfMusics().subscribe(data => this.pieceOfMusic = data[params['id']],
        error => this.alertService.error(error));
    })
  }

}
