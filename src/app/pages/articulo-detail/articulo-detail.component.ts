import { Component } from '@angular/core';
import {ArticulosService} from "../../services/articulos.service";
import {Articulos} from "../../models/Articulos";

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.scss']
})
export class ArticuloDetailComponent {

  // VARIABLES
  articulo: Articulos | undefined;

  constructor(private articuloService: ArticulosService) {
  }

  ngOnInit() {
    // NAVEGACION POR TS
    // Instanciar articulo al iniciar
    this.articulo = this.articuloService.articulo;
    // console.log(this.articulo)

    //Trabajar con el artículo
    this.articulo!.nombre = 'nombre modificado';

    // Setear en el servicio con el articulo modificado
    this.articuloService.articulo = this.articulo;
    console.log('Del TS:')
    console.log(this.articuloService.articulo)

    // NAVEGACIÓN CON ROUTER LINK
    //Guardar estado desde el historial de navegacion
    const state = history.state
    //Sacar articulo
    this.articulo = state.articulo;
    console.log('Del routerlink')
    console.log(this.articulo)
  }
}
