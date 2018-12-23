import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  private currentUrl;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      console.log(event);
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
