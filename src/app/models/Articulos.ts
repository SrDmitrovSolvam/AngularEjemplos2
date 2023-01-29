export class Articulos {
  private _id?: number;
  private _nombre: string;
  private _categorias: string[];
  private _stock: number;
  private _precio: number;
  private _disponible: boolean;


  constructor(nombre: string, categorias: string[], stock: number, precio: number, disponible: boolean) {

    this._nombre = nombre;
    this._categorias = categorias;
    this._stock = stock;
    this._precio = precio;
    this._disponible = disponible;
  }


  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get categorias(): string[] {
    return this._categorias;
  }

  set categorias(value: string[]) {
    this._categorias = value;
  }

  get stock(): number {
    return this._stock;
  }

  set stock(value: number) {
    this._stock = value;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
  }

  get disponible(): boolean {
    return this._disponible;
  }

  set disponible(value: boolean) {
    this._disponible = value;
  }
}
