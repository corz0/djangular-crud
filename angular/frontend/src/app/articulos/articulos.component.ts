import { Component, OnInit } from '@angular/core';

import { dataService } from '../dataservice/data.service';
import { Articulo } from '../dataservice/articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  articulos : Articulo[];

  getArticulos(): void {
    this.dataService.getArticulos().then(articulos => this.articulos = articulos);
  }

  delete(articulo): void{
    this.dataService.deleteArticulos(articulo.id);
    this.articulos = this.articulos.filter(a => a !== articulo);
  }

  constructor(private dataService: dataService) { }
  ngOnInit() {
    this.getArticulos();
    console.log(this.articulos);
  }

}
