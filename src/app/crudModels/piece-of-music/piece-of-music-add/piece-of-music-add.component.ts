import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PieceOfMusicService} from '../../../crudServices/piece-of-music.service';

@Component({
  selector: 'app-piece-of-music-add',
  templateUrl: './piece-of-music-add.component.html',
  styleUrls: ['./piece-of-music-add.component.css']
})
export class PieceOfMusicAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private bs: PieceOfMusicService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      composer: ['', Validators.required ]
    });
  }

  get f() { return this.angForm.controls; }

  addPieceOfMusic(title, composer) {
    this.bs.addPieceOfMusic(title, composer);
  }

  ngOnInit() {}
}
