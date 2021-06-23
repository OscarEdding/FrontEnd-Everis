import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../service/carrito.service';
import { Subscription } from 'rxjs/Subscription';
import { Producto } from './../model/producto';
import { ProductosService } from './../service/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styles: [],
  providers: [ProductosService]
})
export class CatalogoComponent implements OnInit {
  private producto: any;
  private subscription: Subscription;
  private productos: Array<any> = [];

  constructor(private carritoService: CarritoService, private productosService: ProductosService) { }

  ngOnInit() {
    this.getCatalogo();
  }

  /**
   * getCatalogo: Obtener los productos
   */
  getCatalogo() {
    this.productosService.getProductos()
      .then(data => {
        this.productos = (data as Array<Producto>);
      })
      .catch(error => alert(error));
  }

  /**
   * addProducto
   */
  addProducto(producto) {
    this.carritoService.addCarrito(producto);
  }

}
