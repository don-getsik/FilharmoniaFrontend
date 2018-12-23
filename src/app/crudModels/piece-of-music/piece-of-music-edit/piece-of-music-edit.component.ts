import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PieceOfMusicService} from '../../../crudServices/piece-of-music.service';
import {PieceOfMusic} from '../../../_models/pieceOfMusic';

@Component({
  selector: 'app-piece-of-music-edit',
  templateUrl: './piece-of-music-edit.component.html',
  styleUrls: ['./piece-of-music-edit.component.css']
})
export class PieceOfMusicEditComponent implements OnInit {

  pieceOfMusic: PieceOfMusic;
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: PieceOfMusicService,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      composer: ['', Validators.required ]
    });
  }

  get f() { return this.angForm.controls; }

  updatePieceOfMusic(title, composer) {
    this.bs.editPieceOfMusic(this.pieceOfMusic.id, title, composer);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pieceOfMusic = this.bs.getPieceOfMusic(params['id']);
    })
  }
}
