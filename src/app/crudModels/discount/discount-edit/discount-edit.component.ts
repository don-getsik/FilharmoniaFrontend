import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Discount} from '../../../_models/discount';
import {DiscountService} from '../../../crudServices/discount.service';
import {PieceOfMusicService} from '../../../crudServices/piece-of-music.service';
import {AlertService} from '../../../_services';

@Component({
  selector: 'app-discount-edit',
  templateUrl: './discount-edit.component.html',
  styleUrls: ['./discount-edit.component.css']
})
export class DiscountEditComponent implements OnInit {

  discount: Discount = new Discount();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: DiscountService,
              private alertService: AlertService) {
  }

  updateDiscount() {
    this.bs.editDiscount(this.discount).subscribe(data => window.location.href="http://localhost:4200/manage/Discount",
      this.alertService.error);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.getDiscounts().subscribe(data => this.discount = data.find(d => d.name == params['id']),
        this.alertService.error);
    })
  }
}
