import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Performer} from '../../../_models/performer';
import {PerformerService} from '../../../crudServices/performer.service';

@Component({
  selector: 'app-performer-edit',
  templateUrl: './performer-edit.component.html',
  styleUrls: ['./performer-edit.component.css']
})
export class PerformerEditComponent implements OnInit {

  performer: Performer;
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: PerformerService,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      details: ['', Validators.required ],
      cost: ['', Validators.required ]
    });
  }

  get f() { return this.angForm.controls; }

  updatePerformer(details,cost) {
    this.bs.editPerformer(this.performer.id, details, parseFloat(cost));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.performer = this.bs.getPerformer(params['id']);
    })
  }
}
