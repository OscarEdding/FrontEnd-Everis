import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'app/service/carrito.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styles: []
})
export class TopBarComponent implements OnInit {
  private total: number;
  private iva = 0.19;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.carritoService.getCarrito().subscribe(data => {
      this.total = this.carritoService.getTotal() + this.carritoService.getTotal() * this.iva;
    },
      error => alert(error));
  }

}
