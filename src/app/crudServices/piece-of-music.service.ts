import { Injectable } from '@angular/core';
import {PieceOfMusic} from '../_models/pieceOfMusic';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PieceOfMusicService {

  constructor(private http: HttpClient) {
  }


  editPieceOfMusic(p: PieceOfMusic) {
    return this.http.post("http://localhost:8081/admin/piece",p);
  }

  deletePieceOfMusic (id: number) {
    this.http.delete("http://localhost:8081/admin/piece/"+id);
  }

  getPieceOfMusics () {
    return this.http.get<PieceOfMusic[]>("http://localhost:8081/admin/piece");
  }
}
