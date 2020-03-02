import { Component, OnInit } from '@angular/core';

import { Oferta } from "../shared/oferta.model";

import { OfertasService } from "../ofertas.service";

@Component({
  selector: 'pu-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  ofertasCategorias: Oferta[];

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategorias('diversao')
    .then((oferta: Oferta[]) => {
      this.ofertasCategorias = oferta
    })
  }

}
