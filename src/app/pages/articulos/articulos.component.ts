import {Component, OnInit} from '@angular/core';
import {Articulos} from "../../models/Articulos";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ArticulosService} from "../../services/articulos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  articulosLista: Articulos[] = [];
  categoriasLista = ['Consolas', 'Portátiles', 'Informática', 'Tablets']

  //REACTIVE FORMS
  //FormControl
  //Esto se asocia a un input
  nombreForm = new FormControl<String>(
    //Valor por inicial
    'ejemplo@correo.es',
    //Validaciones - comprobacion de los datos
    [Validators.required, Validators.email]
  );

  //FormGroup a partir de FormBuilder
  formulario = this.fb.group({
      nombre:
        ['', //Valor inicial
          [Validators.required] //Validacion - siempre entre []
        ],
      option: [[], Validators.required],
      fecha: [new Date(), [Validators.required]]
    }
  );

  //FORMULARIO REAL DE ARTICULO
  formArticulo = this.fb.group({
    nombre: ['', [Validators.required]],
    categorias: [[''], [Validators.required]],
    stock: [0, [Validators.required]],
    precio: [0, [Validators.required]],
    disponible: [false, [Validators.required]],
  });


  constructor(private fb: FormBuilder, //Formularios
              private articuloService: ArticulosService, //Servicio
              private router: Router) //navegacion
  {
  }

  ngOnInit(): void {
    // Simulacion de llegada de datos de una API
    this.articulosLista = this.articuloService.createArticulos()

    // Comprobar llegada de datos - si existe el articulo que llega
    if (this.articuloService.articulo != undefined) {
      //introducirlo en la lista, reemplazando la posicion original
      this.articulosLista[this.articuloService.posicion] = this.articuloService.articulo!;
    }
  }

  //Métodos
  addArticulo(): void {
    const articuloNuevo = new Articulos(
      'Nuevo',
      ['nuevo'],
      0,
      400,
      false
    );
    this.articulosLista.push(articuloNuevo);
  }

  removeArticulo(): void {
    this.articulosLista.pop();
  }

  formData() {
    console.log(this.formulario.value)
    //PASAR A JSON
    let datosJSON = JSON.stringify(this.formulario.value);
    console.log(datosJSON);
    //... y POST a API
  }

  formDataArticulo() {
    // Comprobar que el formulario es valido
    if (this.formArticulo.valid) {
      // Crear una nueva instancia a partir de los datos del form
      let articulo: Articulos = new Articulos(
        this.formArticulo.value.nombre!, //Puede ser null, por eso !
        this.formArticulo.value.categorias!,
        this.formArticulo.value.stock!,
        this.formArticulo.value.precio!,
        this.formArticulo.value.disponible!
      )
      console.log(articulo)
      //Repercutir en la lista
      this.articulosLista.push(articulo);

      //Resetear valores del formulario - pone tdo a null
      // this.formArticulo.reset(); - se tiene que hacer a mano
      //this.formArticulo.patchValue(); - cambia uno o varios valores
      this.formArticulo.setValue({
        nombre: '',
        categorias: [''],
        stock: 0,
        precio: 0,
        disponible: true
      })

    }
  }

  id: number = 0;
  modificarArticulo(a: Articulos, id: number) {
    this.id = id;
    // Pasar los valores que han llegado
    this.formArticulo.setValue({
      nombre: a.nombre,
      categorias: a.categorias,
      stock: a.stock,
      precio: a.precio,
      disponible: a.disponible
    })
  }

  updateArticulo() {
    // Crear una nueva instancia a partir de los datos del form
    const articulo: Articulos = new Articulos(
      this.formArticulo.value.nombre!, //Puede ser null, por eso !
      this.formArticulo.value.categorias!,
      this.formArticulo.value.stock!,
      this.formArticulo.value.precio!,
      this.formArticulo.value.disponible!
    )
    //Cambiar el articulo por el modificado
    this.articulosLista[this.id] = articulo;
  };


  // Aquí se trabaja el servicio - importar primero con el constructor
  irADetalle(articulo: Articulos, id: number) {
    //Importar el servicio en el constructor
    //Setear el articulo y la posicion
    this.articuloService.articulo = articulo;
    this.articuloService.posicion = id;
    //Importar router en el constructor
    //Navegar a la pagina de detalle
    this.router.navigate(['detail']);

  }
}
