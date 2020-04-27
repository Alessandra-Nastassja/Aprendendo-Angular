import { Injectable } from '@angular/core';

import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class DropdownServiceService {

  constructor(private http: Http) {}


  getEstadosBr(){
    return this.http.get('assets/dados/estadosbr.json')
      .map(res => res.json());
  }

  getCargos() {
    return [
      {
        nome: 'Dev',
        nivel: 'Júnior',
        desc: 'Dev Jr'
      },
      {
        nome: 'Dev',
        nivel: 'Pleno',
        desc: 'Dev Pl'
      },
      {
        nome: 'Dev',
        nivel: 'Senior',
        desc: 'Dev Sr'
      },
    ];
  }

  getTecnolgia() {
    return [
      {
        nome: 'java',
        desc: 'Java'
      },
      {
        nome: 'javascript',
        desc: 'Javascript'
      },
      {
        nome: 'php',
        desc: 'Php'
      },
      {
        nome: 'ruby',
        desc: 'Ruby'
      },
    ];
  }

  getNewsLetter() {
    return [
      {
        valor: 's', desc: 'Sim'
      },
      {
        valor: 'n', desc: 'Não'
      }
    ];
  }
}
