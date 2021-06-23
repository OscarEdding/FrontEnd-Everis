import { Injectable } from '@angular/core';
import { Producto } from './../model/producto';


@Injectable()
export class ProductosService {

  private productos: Array<Producto> = [];


  constructor() {
    this.productos = [{ codigo: 1, nombre: 'Papas', precio: 1290, cantidad: 2, descripcion: '1kg de Papas', imagen: './patata.jpg' },
    { codigo: 2, nombre: 'Cebolla', precio: 4900, cantidad: 1, descripcion: '1kg de Cebollas', imagen: 'cebolla.jpg' },
    { codigo: 3, nombre: 'Pepino', precio: 950, cantidad: 15, descripcion: '1kg de Pepinos', imagen: 'pepino.jpg' },
    { codigo: 4, nombre: 'Futillas', precio: 2590, cantidad: 12, descripcion: '1kg de Frutillas', imagen: 'frutillas2.jpg' },
    { codigo: 5, nombre: 'Mango', precio: 1095, cantidad: 40, descripcion: '1kg de Mangos', imagen: 'mango.jpg' },
    { codigo: 6, nombre: 'Platanos', precio: 700, cantidad: 10, descripcion: '1kg de Platanos', imagen: 'platanos.jpg' },
    { codigo: 7, nombre: 'Kiwi', precio: 3290, cantidad: 23, descripcion: '1kg de Kiwis', imagen: 'kiwi.jpg' },
    { codigo: 8, nombre: 'Duraznos', precio: 1300, cantidad: 4, descripcion: '1kg de Duraznos', imagen: 'duraznos.jpg' },
    { codigo: 9, nombre: 'Manzanas', precio: 1890, cantidad: 8, descripcion: '1kg de Manzanas', imagen: 'manzanas.jpg' },
    { codigo: 10, nombre: 'Piña', precio: 1790, cantidad: 17, descripcion: '1 Piña', imagen: 'piña.jpg' },
    { codigo: 11, nombre: 'Frambuesas', precio: 2690, cantidad: 11, descripcion: '1kg de Frambuesas', imagen: 'frambuesas.jpg' },
    { codigo: 12, nombre: 'Moras', precio: 3100, cantidad: 6, descripcion: '1kg de Moras', imagen: 'moras.jpg' },
    { codigo: 13, nombre: 'Brocoli', precio: 1090, cantidad: 13, descripcion: '1 Brocoli', imagen: 'brocoli.jpg' },
    { codigo: 14, nombre: 'Lechuga', precio: 1190, cantidad: 9, descripcion: '1 Lechuga', imagen: 'lechuga.jpg' },
    { codigo: 15, nombre: 'Ajos', precio: 600, cantidad: 8, descripcion: '150 gramos de Ajos Desgranados', imagen: 'ajos.jpg' },
    ]

  }

  /**
   * getProductos
   */
  getProductos() {
    return new Promise((resolve, reject) => {
      if (this.productos.length > 0) {
        console.log(this.productos)
        resolve(this.productos);
      } else {
        reject('No hay productos disponibles');
      }
    });
  }

}
