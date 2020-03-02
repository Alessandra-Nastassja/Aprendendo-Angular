
import { Routes } from '@angular/router'

import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { Error404Component } from "./error404/error404.component";


export const routs: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'produtos', component: ProductsComponent },
    { path: '**', component:  Error404Component}
];