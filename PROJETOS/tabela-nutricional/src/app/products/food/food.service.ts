import { Injectable, EventEmitter } from '@angular/core';
import { Http } from "@angular/http";

import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  urlCors = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: Http) { }

  // Carrega as comidas da API
  getFood(){
    return this.http.get(this.urlCors + "https://taco-food-api.herokuapp.com/api/v1/food")
      .map(res => res.json()); 
  }

  // Carrega informação mais detalhada do produto da API
  getInfoFood(idProduto){  
    return this.http.get(this.urlCors + "https://taco-food-api.herokuapp.com/api/v1/food/" + idProduto)
    .map(res => res.json());
  }
}
