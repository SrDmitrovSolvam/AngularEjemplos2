import { Component, OnInit } from '@angular/core';
import {Articulos} from "../../models/Articulos";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  articulosLista: Articulos[] = [];
  constructor() { }

  ngOnInit(): void {
    //Al iniciar la pagina, se crea la lista
    this.crearLista();
  }

  //Métodos
  crearLista(): void {
    const articulo1 = new Articulos(
      'iPhone 14',
      ['Telefonia','Informatica'],
      300,
      1200,
      true
    );
    const articulo2 = new Articulos(
      'iPad pro',
      ['Tablets','Informatica'],
      150,
      900,
      true
    );

    //Añade elementos a la lista
    for (let i = 0; i < 2; i++) {
      this.articulosLista.push(articulo1);
      this.articulosLista.push(articulo2);
    }
    //La muestra por consola
    console.table(this.articulosLista);
  }

}
