import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    routes: Object[] = [
      {
        title: 'Depositos',
        route: '/depositos',
        icon: 'dashboard'
      },
      {
        title: 'Articulos',
        route: '/articulos',
        icon: 'dashboard'
      }
    ]
  constructor() { }

  ngOnInit() {
  }

}
