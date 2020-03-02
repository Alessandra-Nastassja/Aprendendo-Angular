import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import  "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  urlCors = 'https://cors-anywhere.herokuapp.com/';

  idCategoria: number

  constructor(private http: Http) { }

  // Carrega todas as categorias 
  getCategory(){
    return this.http.get(this.urlCors + "http://taco-food-api.herokuapp.com/api/v1/category")
    .map(res => res.json()); 
  }

  // Carrega a nova lista de produtos por categoria
  getFilterCategories(idCategoria){
    return this.http.get(this.urlCors + "https://taco-food-api.herokuapp.com/api/v1/category/"+ idCategoria + "/food")
    .map(res => res.json());
  }
}
