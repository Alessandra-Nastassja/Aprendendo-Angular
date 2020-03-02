import { FoodService } from "./food.service";
import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  providers: [FoodService]
})
export class FoodComponent implements OnInit {

  @Input() comidas = [];
  @Input() infoComida = [];
  @Input() numComidas: number;
  idProduto: [];
  isLoading = true;

  constructor(public foodService: FoodService) { }

  ngOnInit() {
    this.getFood();
  }

  getFood() {
    setTimeout(() => {
      this.foodService.getFood()
        .finally(() => this.isLoading = false)
        .subscribe(
          success => {
            this.comidas = success

            this.numComidas = this.comidas.length;           
          }
        )
    }, 500);
  }

  getInfoFood(_event) {
    this.idProduto = _event.target.id;
    this.foodService.getInfoFood(this.idProduto).subscribe(
      success => {
        this.infoComida = success
      }
    )
  }

}
