import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './../catalogo/catalogo.component';
import { CarritoComponent } from './../carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    CatalogoComponent,
    CarritoComponent
  ]
})
export class HomeModule { }
