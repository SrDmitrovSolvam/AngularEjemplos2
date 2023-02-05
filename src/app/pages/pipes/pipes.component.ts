import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  // VARIABLES
  texto = 'esto es un texto';
  numero = 47871927419027;
  decimal = 52.95;
  fechaHTML = new Date();
  fechaTS?: string | null;

  // PIPES Por código

  //Un pipe se importa con el constructor
  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
    //Aquí hay que inicializar el pipe
    const f = this.datePipe.transform(new Date(), 'medium')
    console.log(f)
    this.fechaTS = f;
  }

}
