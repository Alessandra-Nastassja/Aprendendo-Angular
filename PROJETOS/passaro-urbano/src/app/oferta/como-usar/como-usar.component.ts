import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { OfertasService } from "../../ofertas.service";

@Component({
  selector: 'pu-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  comoUsar: string = '';

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string) => {
        this.comoUsar = descricao
      })
  }

}
