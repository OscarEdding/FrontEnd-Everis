import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { FooterService } from '../footer.service';
import { EnvioService } from './../envio.service'
import { PagoService } from '../pago.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  total: any;
  fecha = new Date();
  fecha2 = new Date();
  factura!: any;
  cantidadesArray: any;
  cantidadesJSONString: any;
  productosArray: any;
  productosJSONString: any;
  precioArray: any;
  precioJSONString: any;

  envio: any;
  pago: any;

  constructor(public nav: NavService, public footer: FooterService, private _servicio: EnvioService, private pagoServicio: PagoService, private router: Router) {
    this.total = localStorage.getItem("total");
    this.envio = _servicio.getEnvio()
    this.pago = pagoServicio.getPago()

    this.cantidadesJSONString = localStorage.getItem("cantidad");
    this.cantidadesArray = JSON.parse(this.cantidadesJSONString).map(function (x: any) {
      return x["cant"]
    })
    this.cantidadesArray.splice("0", 1);

    this.productosJSONString = localStorage.getItem("carrito");
    this.productosArray = JSON.parse(this.productosJSONString).map(function (y: any) {
      return y["nombre"]
    })

    this.precioJSONString = localStorage.getItem("carrito");
    this.precioArray = JSON.parse(this.precioJSONString).map(function (z: any) {
      return z["precio"]
    })
  }


  ngOnInit(): void {
    this.factura = Math.trunc(Math.random() * (1000));
    if (!this.pago || !this.envio) {
      this.router.navigate(['/envio'])
      alert('A ocurrido un error')
    }
    this.fecha2.setFullYear(this.fecha2.getFullYear() + 1);
    this.nav.showNav();
    this.nav.doSomethingElseUsefulNav();
    this.footer.showFooter();
    this.footer.doSomethingElseUsefulFooter();
  }

}
