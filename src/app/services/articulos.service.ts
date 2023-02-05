import {Injectable} from '@angular/core';
import {Articulos} from "../models/Articulos";

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  // VARIABLES
  private _articulo: Articulos | undefined;
  private _posicion: number = 0;

  constructor() {

  }

  // GETTERS y SETTERS
  get articulo(): Articulos | undefined {
    return this._articulo;
  }

  set articulo(value: Articulos | undefined) {
    this._articulo = value;
  }

  get posicion(): number {
    return this._posicion;
  }

  set posicion(value: number) {
    this._posicion = value;
  }


// MÉTODOS
  public createArticulos(): Articulos[] {
    const lista: Articulos[] = [];
    for (let i = 0; i < 10; i++) {
      lista.push(
        new Articulos('articulo ' + i, ['informática'], 2, 20 + i, true)
      );
    }
    return lista;
  }
}
