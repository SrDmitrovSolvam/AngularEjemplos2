import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { DialogComponent } from './pages/dialog/dialog/dialog.component';
import {MatButtonModule} from "@angular/material/button";
import { BasicDialogComponent } from './pages/dialog/basic-dialog/basic-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DataDialogComponent } from './pages/dialog/data-dialog/data-dialog.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import localeES from '@angular/common/locales/es'
//Así se importa el locale del idioma
import {DatePipe, registerLocaleData} from "@angular/common";
import { PipePersonalizadoPipe } from './pages/pipes/custom/pipe-personalizado.pipe';
import { ArticuloDetailComponent } from './pages/articulo-detail/articulo-detail.component';
//Así se registra
registerLocaleData(localeES, 'es')

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ArticulosComponent,
    NotfoundComponent,
    DialogComponent,
    BasicDialogComponent,
    DataDialogComponent,
    PipesComponent,
    PipePersonalizadoPipe,
    ArticuloDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    //Así se inyecta el locale español
    {provide:LOCALE_ID, useValue:'es-ES'},
    // Inyectar DatePipe
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
