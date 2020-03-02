import { FiltrosService } from "./filtros.service";
import { Component, OnInit } from '@angular/core';

import "rxjs/add/operator/finally";

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
  providers: [FiltrosService]
})
export class FiltrosComponent implements OnInit {

  comidas = [];
  numComidas: number;
  categorias = [];
  idCategoria: number;
  isLoading = true;

  constructor(private filtrosService: FiltrosService) {

  }

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    setTimeout(() => {
      this.filtrosService.getCategory()
      .finally(() => this.isLoading = false)
      .subscribe(
        success => {
          this.categorias = success
        }
      )
    }, 1000);
  }

  getIdProduto(event) {
    this.idCategoria = event.target.id

    this.getFilterCategory(this.idCategoria)
  }

  getFilterCategory(event) {
    this.filtrosService.getFilterCategories(event).subscribe(
      success => {
        this.comidas = success

        this.numComidas = this.comidas.length;       
      }
    )
  }

}
