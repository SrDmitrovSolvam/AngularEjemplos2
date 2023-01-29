import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //Recuerda que para navegar se necesita el módulo Router
  constructor( private router: Router ) {
    //Vacío
  }

  ngOnInit(): void {
  }

  navegarA() {
    this.router.navigate(['articulos']);
  }
}
