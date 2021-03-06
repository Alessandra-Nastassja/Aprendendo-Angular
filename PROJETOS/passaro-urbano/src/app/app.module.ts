import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from "@angular/http";

// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import {OrdermCompraComponent } from './orderm-compra/orderm-compra.component';

import { DescricaoReduzida } from "./util/descricao-reduzida.pipe";
@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdermCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, 
    // FormsModule
    ReactiveFormsModule
  ],
  // providers: [{ provide: LOCALE_ID, useValue: 'pt'}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
