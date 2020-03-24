import { Injectable } from '@angular/core';

import { Http } from "@angular/http";

import { Observable } from 'rxjs/Observable';

import { Pedido } from "./shared/pedido.model";

@Injectable()
export class OrdemCompraService{

    constructor(private http: Http){}

    // efetivarCompra(pedido: Pedido): Observable<any>{
    //     return this.http.post(``)
    // }
}