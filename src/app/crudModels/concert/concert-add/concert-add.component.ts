import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConcertService} from '../../../crudServices/concert.service';
import {PerformerService} from '../../../crudServices/performer.service';

@Component({
  selector: 'app-concert-add',
  templateUrl: './concert-add.component.html',
  styleUrls: ['./concert-add.component.css']
})
export class ConcertAddComponent implements OnInit {


  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: ConcertService, private ps: PerformerService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      performer: [0, Validators.required ],
      organizationCosts: [0, Validators.required ],
      title: ['', Validators.required ],
      ticketCosts: ['', Validators.required ],
      date: ['', Validators.required ]
    });
  }

  get f() { return this.angForm.controls; }

  addConcert(performer, title, organizationCosts, ticketCosts, date) {
    this.bs.addConcert(performer, title, parseFloat(organizationCosts), parseFloat(ticketCosts), new Date(date));
  }

  getPerformers() {
    return this.ps.getPerformers();
  }

  ngOnInit() {
  }

}
