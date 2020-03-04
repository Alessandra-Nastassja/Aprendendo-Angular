import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { OfertasService } from "../ofertas.service";

import { Oferta } from "../shared/oferta.model";

@Component({
  selector: 'pu-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {

  oferta: Oferta;

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit() {
    // this.route.params.subscribe((parametro: any) => { console.log(parametro) })
  
    this.route.params.subscribe((parametros: any) => {
      this.ofertaService.getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta
  
          console.log(this.oferta)
        })
      }) 

  }

}
