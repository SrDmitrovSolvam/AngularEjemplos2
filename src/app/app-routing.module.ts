import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticulosComponent} from "./pages/articulos/articulos.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {DialogComponent} from "./pages/dialog/dialog/dialog.component";

//Aquí se definen los componentes que tienen navegacion
const routes: Routes = [
  {
    //El nombre de la ruta
    path: 'home',
    //El nombre de la clase
    component: HomeComponent
  },
  {
    //El nombre de la ruta inicial
    path: '',
    //Redireccion
    redirectTo: '/home',
    //Esto fuerza la comprobacion de tdo el string de la ruta
    pathMatch: "full"
  },
  {
    path: 'articulos',
    component: ArticulosComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },

  //Recogedor de direcciones malas - SIEMPRE AL FINAL
  {
    //aquí entra cualquier string
    path: '**', component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
