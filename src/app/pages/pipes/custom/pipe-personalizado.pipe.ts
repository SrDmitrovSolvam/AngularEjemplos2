import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizado'
})
export class PipePersonalizadoPipe implements PipeTransform {

  // Value -> Valor de entrada
  // Args -> opciones del pipe
  // retorno


  transform(
    value: number, //Valor de entrada
    exponente: number = 1 //opciones - argumentos que recibe (si no recibe, cuenta con valor predeterminado)
  ): number //valor de salida
  {
    //acciones
    return Math.pow(value, exponente);
  }

}


