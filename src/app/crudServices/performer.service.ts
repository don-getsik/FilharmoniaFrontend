import { Injectable } from '@angular/core';
import {Performer} from '../_models/performer';
import {TRANSCTIONS} from '../_mock/budget_mock';
import {PERFORMERS} from '../_mock/performer_mock';

@Injectable({
  providedIn: 'root'
})
export class PerformerService {

  constructor() {
  }

  performers: Performer[] = PERFORMERS;

  addPerformer(cost: number, details: string) {
    let p: Performer = {id: PERFORMERS.length, cost: cost, details: details};
    this.performers.push(p);
  }

  editPerformer(id: number, details: string, cost: number) {
    this.performers = this.performers.filter(e => e !== this.performers.find(e => e.id === id));
    let p: Performer = {id: id, cost: cost, details: details};
    this.performers.push (p);
  }

  deletePerformer (p: Performer) {
    this.performers = this.performers.filter(e => e !== this.performers.find(e => e.id === p.id));
  }

  getPerformers () {
    return this.performers;
  }

  getPerformer (id: number) {
    return this.performers[id];
  }
}
