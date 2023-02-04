import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss']
})
export class BasicDialogComponent {
  // Es necesario decir a Angular que ESTO es un dialog especificando el dialogRef

  constructor(public dialogRef:MatDialogRef<BasicDialogComponent>) {
    // dialogRef será accesible desde cualquier punto del proyecto
  }
}
