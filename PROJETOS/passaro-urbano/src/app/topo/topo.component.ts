import { Component, OnInit } from '@angular/core';

import { OfertasService } from "../ofertas.service";
import { Observable, Subject } from 'rxjs';

import "../util/rxjs-extencions";

import { Oferta } from "../shared/oferta.model";

@Component({
  selector: 'pu-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  ofertas: Observable<Oferta[]>
  ofertas2: Oferta[]

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termoDaPesquisa: string) => { 

        if (termoDaPesquisa.trim() === '') {
          return Observable.of<Oferta[]>([])
        } 
        return this.ofertasService.pesquisaOfertas(termoDaPesquisa)  
      })

      .catch((err: any) => {
        return Observable.of<Oferta[]>([])
      })

      // this.ofertas.subscribe((ofertas: Oferta[]) => {
      //   this.ofertas2 = ofertas
      // })
  }

  pesquisa(termoDaPesquisa: string): void{
    this.subjectPesquisa.next(termoDaPesquisa)
  }


  // ------------------------------------------------------------------------------------
  // VERSÃO 1

  // pesquisa(termoDaPesquisa: string): void{
  //   this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa)
      
  //   this.ofertas.subscribe(
  //     (ofertas: Oferta[]) => console.log(ofertas),
      
  //     (error: any) => {
  //       console.log(error.status);
        
  //     },

  //     () => {
  //       console.log('Sucesso!!!');
        
  //     }
  //   )
    
  // }

}
