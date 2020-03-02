import { Component, OnInit } from '@angular/core';

import { Oferta } from "../shared/oferta.model";

import { OfertasService } from "../ofertas.service";

@Component({
  selector: 'pu-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  ofertasCategorias: Oferta[];

  dataTeste: any = new Date(2017, 8, 30)

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategorias('restaurante')
    .then((ofertas: Oferta[]) => {
      this.ofertasCategorias = ofertas

      console.log(this.ofertasCategorias);
      
    })

  }

}
