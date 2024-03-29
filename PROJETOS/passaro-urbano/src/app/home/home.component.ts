import { Component, OnInit } from '@angular/core';

import { OfertasService } from "../ofertas.service";

import { Oferta } from "../shared/oferta.model";

@Component({
  selector: 'pu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas()

    this.ofertasService.getOfertas()
      .then(
        (ofertas: Oferta[]) => { this.ofertas = ofertas } )
      .catch((param: any) => { console.log(param) })
  }

}
