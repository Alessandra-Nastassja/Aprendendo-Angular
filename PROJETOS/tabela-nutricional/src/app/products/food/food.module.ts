import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FoodComponent } from "./food.component";

@NgModule({
  declarations: [
    FoodComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
})
export class FoodModule { }
