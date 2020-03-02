import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { routs } from './app.routes';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { FoodComponent } from './products/food/food.component';
import { FiltrosComponent } from './utils/filtros/filtros.component';
import { CardComponent } from './utils/card/card.component';
import { BreadcrumbComponent } from './utils/breadcrumb/breadcrumb.component';
import { Error404Component } from './error404/error404.component';
import { MenuComponent } from './utils/menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FiltrosComponent,
    CardComponent,
    BreadcrumbComponent,
    FoodComponent,
    Error404Component,
    MenuComponent,
    ProductsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
