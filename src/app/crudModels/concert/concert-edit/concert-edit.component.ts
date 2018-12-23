import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConcertService} from '../../../crudServices/concert.service';
import {PerformerService} from '../../../crudServices/performer.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Concert} from '../../../_models/concert';

@Component({
  selector: 'app-concert-edit',
  templateUrl: './concert-edit.component.html',
  styleUrls: ['./concert-edit.component.css']
})
export class ConcertEditComponent implements OnInit {

  concert: Concert;
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: ConcertService,
              private fb: FormBuilder,
              private ps: PerformerService) {
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

  updateConcert(performer, title, organizationCosts, ticketCosts, date) {
    this.bs.editConcert(this.concert.id, performer, title, parseFloat(organizationCosts), parseFloat(ticketCosts), new Date(date));
  }

  getPerformers() {
    return this.ps.getPerformers();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.concert = this.bs.getConcert(params['id']);
    })
  }
}
