import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PerformerService} from '../../../crudServices/performer.service';

@Component({
  selector: 'app-performer-add',
  templateUrl: './performer-add.component.html',
  styleUrls: ['./performer-add.component.css']
})
export class PerformerAddComponent implements OnInit {


  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: PerformerService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      details: ['', Validators.required ],
      cost: ['', Validators.required ]
    });
  }

  get f() { return this.angForm.controls; }

  addPerformer(details, cost) {
    this.bs.addPerformer(details, cost);
  }

  ngOnInit() {
  }
}
