import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.scss']
})
export class DataDialogComponent {

  //VARIABLES
  regalo = new FormControl<string>('');

  constructor(public dialogRef:
                MatDialogRef<DataDialogComponent>,
                //Config para recibir datos
                @Inject(MAT_DIALOG_DATA) public data: string //tipo de datos a recibir
  ) {
  }

  onClick() {
    // Lógica antes de cerrar
    this.dialogRef.close(
      //Aquí se pasan los datos
      'Resultado del onClick()'
    )
  }
}
