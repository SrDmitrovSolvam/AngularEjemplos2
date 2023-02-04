import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BasicDialogComponent} from "../basic-dialog/basic-dialog.component";
import {FormControl} from "@angular/forms";
import {DataDialogComponent} from "../data-dialog/data-dialog.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  // VARIABLES
  datosInput = new FormControl<String>('');
  resultado: string = '';

  // Esto en el componente que lo llama
  constructor(private dialog: MatDialog) {
  }


  //Métodos que disparan los dialog
  openBasicDialog() {
    this.dialog.open(
      BasicDialogComponent, // Ref a si mismo
      { //Configuracion especifica por codigo
        //Dimensiones
        // width: '500px',
        // height: '600px'
        maxWidth: '600px',
        //Animacion de apertura/cierre en ms
        enterAnimationDuration: 1000,
        exitAnimationDuration: 1000,
        //Asigna una clase de html para utilizar css
        panelClass: 'dialog1',
        //Cambiar poisicion
        position: {top: '100px', bottom: '5px', left: '100px', right: '5px'},
        //Forzar click en un boton
        disableClose: true,
        //Oscurecer fondo y/o asignar clase de css al fondo
        hasBackdrop: true,
        backdropClass: 'dialogFondo',
      });
  }

  openDataDialog() {
    //Para enviar datos, 1º crear el dialog y 2º guardar la dialogRef
    const dialogRef = this.dialog.open(DataDialogComponent, {
      //Esto envía los datos de vuelta
      data: this.datosInput.value,
      //Si esto está a FALSE, devolverá null
      disableClose: true
    });

    //Quedar a la escucha del cierre - MÉTODO ASÍNCRONO
    dialogRef.afterClosed().subscribe(result => {
      //Se "suscribe" al evento de cierre y, luego, ejecuta el código que hay a continuación
      // En este caso, almacena los datos al cierre
      this.resultado = 'Input: '+this.datosInput.value + ' | datos dialog: ' + result;
    })
  }
}
