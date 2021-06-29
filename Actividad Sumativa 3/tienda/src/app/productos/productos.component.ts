import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavService } from '../nav.service';
import { FooterService } from '../footer.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  template: `
    <app-pago [childMessage]="parentMessage"></app-pago>
  `,
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public nav: NavService, public footer: FooterService) { }

  ngOnInit() {
    this.nav.showNav();
    this.nav.doSomethingElseUsefulNav();
    this.footer.showFooter();
    this.footer.doSomethingElseUsefulFooter();
  }

  totalDinero = 0;
  totalCarrito = 0;
  hola = ['hola', 'como'];
  clave = new FormControl('');
  cantidad = new FormControl();
  productosCarrito: any[] = []; // Array para el carrito
  productosCantidad = [{
    codigo: 0,
    cant: 0,
  }
  ];
  productos: any[] = [];
  productosActual1 = [   // Array para items en stock
    {
      codigo: 250, nombre: 'Gigabyte GeForce GTX 1050 Ti OC', precio: 298900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/1050tigiga.png',
      tags: "nvidia, gigabyte, gtx"
    },
    {
      codigo: 251, nombre: 'MSI GeForce GTX 1650 VENTUS XS', precio: 359990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/1650msi.png',
      tags: "nvidia, msi, gtx"
    },
    {
      codigo: 252, nombre: 'EVGA GeForce GTX 1650 SUPER', precio: 390000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/1650sevga.png',
      tags: "nvidia, evga, gtx, super"
    },
    {
      codigo: 253, nombre: 'MSI GeForce GTX 1660 SUPER VENTUS XS OC', precio: 609990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/1660smsi.png',
      tags: "nvidia, msi, gtx, super"
    },
    {
      codigo: 254, nombre: 'Zotac GAMING GeForce RTX 2060', precio: 675000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/2060zotac.png',
      tags: "nvidia, zotac, rtx, 3060"
    },
    {
      codigo: 255, nombre: 'ASUS TUF-RTX3060-12G-GAMING', precio: 839900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/3060asus.png',
      tags: "nvidia, asus, rtx, 3060"
    },
    {
      codigo: 256, nombre: 'EVGA GeForce RTX 3060 XC GAMING', precio: 789990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/3060evga.png',
      tags: "nvidia, evga, rtx, 3060"
    },
    {
      codigo: 257, nombre: 'MSI GeForce RTX 3060 GAMING X', precio: 899000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/3060msi.png',
      tags: "nvidia, msi, rtx, 3060"
    },
    {
      codigo: 258, nombre: 'MSI Radeon RX 6700 XT GAMING X 12G', precio: 935684,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/6700msi.png',
      tags: "amd, msi, 6700"
    },
    {
      codigo: 259, nombre: 'ASUS ROG-STRIX-LC-RX6900XT-O16G-GAMING', precio: 2199990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/6900asus.png',
      tags: "amd, asus, 6900"
    },
    {
      codigo: 260, nombre: 'Gabinete Cooler Master MasterBox TD500 Mesh', precio: 159990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/gabcm.png',
      tags: "gabinete"
    },
    {
      codigo: 261, nombre: 'Gabinete Thermaltake Core P3', precio: 169990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/gabthermal.png',
      tags: "gabinete"
    },
    {
      codigo: 262, nombre: 'Micrófono Profesional Gamer HyperX QuadCast', precio: 110990,
      descripcion: 'Montura anti-vibraciones, Tres condensadores', img: '../../assets/tarjetas/quadcast.png',
      tags: "microfono, hiperx, quadcast"
    },
    {
      codigo: 263, nombre: 'Mouse gamer SteelSeries 650 Wireless', precio: 149990,
      descripcion: 'Sensor óptico doble, Truemove 3, 12000CPI, Peso ajustable', img: '../../assets/tarjetas/rival650wireless.png',
      tags: "mouse, steelseries, wireless"
    },
    {
      codigo: 264, nombre: 'Mouse Gamer inalámbrico Logitech G903', precio: 109990,
      descripcion: 'RGB Programable, 12000dpi, Nano receptor, Cable de carga', img: '../../assets/tarjetas/g903.png',
      tags: "mouse, logitech, g903"
    },
    {
      codigo: 265, nombre: 'Monitor Gamer Asus TUF Gaming', precio: 649990,
      descripcion: '27 pulgadas, FHD 1920x1080, Fast IPS, 280Hz, 1ms GTG, ELMB Sync, G-Sync', img: '../../assets/tarjetas/MonitorAsusTUF.png',
      tags: "monitor, asus, tuf"
    },
    {
      codigo: 266, nombre: 'Monitor Gamer BenQ Zowie XL2546', precio: 499990,
      descripcion: 'Led 24.5 pulgadas, 240Hz, 1ms, Full HD, Widescreen, HDMI, Dark Grey', img: '../../assets/tarjetas/MonitorBenQZowie.png',
      tags: "monitor, benq, zowie"
    },
    {
      codigo: 267, nombre: 'Audífonos Gamer HyperX Cloud II', precio: 76990,
      descripcion: 'Sonido Surround Virtual 7.1, Multiplataforma, USB, 3,5mm, Color Red', img: '../../assets/tarjetas/cloud2.png',
      tags: "audifonos, hiperx, cloud"
    },
    {
      codigo: 268, nombre: 'Tarjeta de Video Zotac Gaming GeForce GTX 1660', precio: 76990,
      descripcion: 'Tarjeta de Video Zotac Gaming GeForce GTX 1660 Super', img: '../../assets/tarjetas/TarjetaZotac.png',
      tags: "zotac, gforce, gtx"
    },
    {
      codigo: 269, nombre: 'Procesador Intel® Core™ i5-9400', precio: 194990,
      descripcion: '6-Core 2.9 GHz (4.10 GHz Turbo) FCLGA1151 (9na Gen) 65W', img: '../../assets/tarjetas/i59400.png',
      tags: "procesador, intel, i5"
    },
    {
      codigo: 270, nombre: 'Procesador Intel® Core™ i7-9700KF', precio: 420990,
      descripcion: '(12M Cache, up to 4.90 GHz) LGA 1151-V2, 95W, Sin Fan y Gráficos', img: '../../assets/tarjetas/i79700kf.png',
      tags: "procesador, intel, i7"
    },
    {
      codigo: 271, nombre: 'Procesador Intel® Core™ i9-10900', precio: 506990,
      descripcion: '10-Core 2.8 GHz (20M Cache, up to 5.20 GHz) LGA1200 65W', img: '../../assets/tarjetas/i910900.png',
      tags: "procesador, intel, i9"
    },
    {
      codigo: 272, nombre: 'Procesador AMD Ryzen 9 3950X', precio: 506990,
      descripcion: '16-Core 3.5GHz (4.7GHz Max Boost) Socket AM4 105W, Sin Grafico, Sin Fan', img: '../../assets/tarjetas/rayzen93950x.png',
      tags: "procesador, ryzen, 3950X"
    },
    {
      codigo: 273, nombre: 'Notebook Gamer ASUS Strix Scar II', precio: 506990,
      descripcion: 'i7-8750H, Ram 16GB, HDD 1TB + SSD 256GB, GTX 1070, Led 15,6", W10', img: '../../assets/tarjetas/asysstrixscarii.png',
      tags: "notebook, asus, strix, scar"
    }
  ];

  productosActual = [   // Array para items en stock
    {
      codigo: 250, nombre: 'Gigabyte GeForce GTX 1050 Ti OC', precio: 298900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/1050tigiga.png',
      tags: "nvidia, gigabyte, gtx"
    },
    {
      codigo: 251, nombre: 'MSI GeForce GTX 1650 VENTUS XS', precio: 359990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/1650msi.png',
      tags: "nvidia, msi, gtx"
    },
    {
      codigo: 252, nombre: 'EVGA GeForce GTX 1650 SUPER', precio: 390000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/1650sevga.png',
      tags: "nvidia, evga, gtx, super"
    },
    {
      codigo: 253, nombre: 'MSI GeForce GTX 1660 SUPER VENTUS XS OC', precio: 609990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/1660smsi.png',
      tags: "nvidia, msi, gtx, super"
    },
    {
      codigo: 254, nombre: 'Zotac GAMING GeForce RTX 2060', precio: 675000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/2060zotac.png',
      tags: "nvidia, zotac, rtx, 3060"
    },
    {
      codigo: 255, nombre: 'ASUS TUF-RTX3060-12G-GAMING', precio: 839900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/3060asus.png',
      tags: "nvidia, asus, rtx, 3060"
    },
    {
      codigo: 256, nombre: 'EVGA GeForce RTX 3060 XC GAMING', precio: 789990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/3060evga.png',
      tags: "nvidia, evga, rtx, 3060"
    },
    {
      codigo: 257, nombre: 'MSI GeForce RTX 3060 GAMING X', precio: 899000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/3060msi.png',
      tags: "nvidia, msi, rtx, 3060"
    },
    {
      codigo: 258, nombre: 'MSI Radeon RX 6700 XT GAMING X 12G', precio: 935684,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/6700msi.png',
      tags: "amd, msi, 6700"
    },
    {
      codigo: 259, nombre: 'ASUS ROG-STRIX-LC-RX6900XT-O16G-GAMING', precio: 2199990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/6900asus.png',
      tags: "amd, asus, 6900"
    },
    {
      codigo: 260, nombre: 'Gabinete Cooler Master MasterBox TD500 Mesh', precio: 159990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/gabcm.png',
      tags: "gabinete"
    },
    {
      codigo: 261, nombre: 'Gabinete Gamer Thermaltake Core P3', precio: 169990,
      descripcion: 'Vidrio Templado Snow Edition ATX, Open Frame Chassis, ATX', img: '../../assets/tarjetas/gabthermal.png',
      tags: "gabinete"
    },
    {
      codigo: 262, nombre: 'Micrófono Profesional Gamer HyperX QuadCast', precio: 110990,
      descripcion: 'Montura anti-vibraciones, Tres condensadores', img: '../../assets/tarjetas/quadcast.png',
      tags: "microfono, hiperx, quadcast"
    },
    {
      codigo: 263, nombre: 'Mouse gamer SteelSeries 650 Wireless', precio: 149990,
      descripcion: 'Sensor óptico doble, Truemove 3, 12000CPI, Peso ajustable', img: '../../assets/tarjetas/rival650wireless.png',
      tags: "mouse, steelseries, wireless"
    },
    {
      codigo: 264, nombre: 'Mouse Gamer inalámbrico Logitech G903', precio: 109990,
      descripcion: 'RGB Programable, 12000dpi, Nano receptor, Cable de carga', img: '../../assets/tarjetas/g903.png',
      tags: "mouse, logitech, g903"
    },
    {
      codigo: 265, nombre: 'Monitor Gamer Asus TUF Gaming', precio: 649990,
      descripcion: '27 pulgadas, FHD 1920x1080, Fast IPS, 280Hz, 1ms GTG, ELMB Sync, G-Sync', img: '../../assets/tarjetas/MonitorAsusTUF.png',
      tags: "monitor, asus, tuf"
    },
    {
      codigo: 266, nombre: 'Monitor Gamer BenQ Zowie XL2546', precio: 499990,
      descripcion: 'Led 24.5 pulgadas, 240Hz, 1ms, Full HD, Widescreen, HDMI, Dark Grey', img: '../../assets/tarjetas/MonitorBenQZowie.png',
      tags: "monitor, benq, zowie"
    },
    {
      codigo: 267, nombre: 'Audífonos Gamer HyperX Cloud II', precio: 76990,
      descripcion: 'Sonido Surround Virtual 7.1, Multiplataforma, USB, 3,5mm, Color Red', img: '../../assets/tarjetas/cloud2.png',
      tags: "audifonos, hiperx, cloud"
    },
    {
      codigo: 268, nombre: 'Tarjeta de Video Zotac Gaming GeForce GTX 1660', precio: 76990,
      descripcion: 'Tarjeta de Video Zotac Gaming GeForce GTX 1660 Super', img: '../../assets/tarjetas/TarjetaZotac.png',
      tags: "zotac, gforce, gtx"
    },
    {
      codigo: 269, nombre: 'Procesador Intel® Core™ i5-9400', precio: 194990,
      descripcion: '6-Core 2.9 GHz (4.10 GHz Turbo) FCLGA1151 (9na Gen) 65W', img: '../../assets/tarjetas/i59400.png',
      tags: "procesador, intel, i5"
    },
    {
      codigo: 270, nombre: 'Procesador Intel® Core™ i7-9700KF', precio: 420990,
      descripcion: '(12M Cache, up to 4.90 GHz) LGA 1151-V2, 95W, Sin Fan y Gráficos', img: '../../assets/tarjetas/i79700kf.png',
      tags: "procesador, intel, i7"
    },
    {
      codigo: 271, nombre: 'Procesador Intel® Core™ i9-10900', precio: 506990,
      descripcion: '10-Core 2.8 GHz (20M Cache, up to 5.20 GHz) LGA1200 65W', img: '../../assets/tarjetas/i910900.png',
      tags: "procesador, intel, i9"
    },
    {
      codigo: 272, nombre: 'Procesador AMD Ryzen 9 3950X', precio: 506990,
      descripcion: '16-Core 3.5GHz (4.7GHz Max Boost) Socket AM4 105W, Sin Grafico, Sin Fan', img: '../../assets/tarjetas/rayzen93950x.png',
      tags: "procesador, ryzen, 3950X"
    },
    {
      codigo: 273, nombre: 'Notebook Gamer ASUS Strix Scar II', precio: 506990,
      descripcion: 'i7-8750H, Ram 16GB, HDD 1TB + SSD 256GB, GTX 1070, Led 15,6", W10', img: '../../assets/tarjetas/asysstrixscarii.png',
      tags: "notebook, asus, strix, scar"
    }
  ];
  productosCarritoActual: any;


  agregarProducto(i: any) {
    if (this.productosCarrito.includes(this.productosActual[i])) {
      console.log("Ya tiene el producto")
      for (let j = 0; j < this.productosCantidad.length; j++) {
        if (this.productosActual[i].codigo == this.productosCantidad[j].codigo) {
          this.productosCantidad[j].cant += 1;
        }
      }
      this.totalDinero += this.productosActual[i].precio;
      localStorage.setItem("total", JSON.stringify(this.totalDinero));
    }
    else {
      console.log("No tiene el producto");
      this.productosCarrito.push(this.productosActual[i]);
      this.productosCantidad.push({ codigo: this.productosActual[i].codigo, cant: 1 });
      this.totalDinero += this.productosActual[i].precio;
      localStorage.setItem("total", JSON.stringify(this.totalDinero))
    }
    localStorage.setItem("carrito", JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad", JSON.stringify(this.productosCantidad));
  }

  eliminarProducto(cod: any) {
    for (let i = 0; i < this.productosCarrito.length; i++) {
      if (this.productosCarrito[i].codigo == cod) {
        this.totalDinero -= (this.productosCarrito[i].precio * this.productosCantidad[i + 1].cant);
        localStorage.setItem("total", JSON.stringify(this.totalDinero))
        this.productosCarrito.splice(i, 1);
        this.productosCantidad.splice(i + 1, 1);
      }
    }
    localStorage.setItem("carrito", JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad", JSON.stringify(this.productosCantidad));
  }

  actualizarProducto(cod: any) {
    for (let i = 0; i < this.productosCarrito.length; i++) {
      if (this.productosCarrito[i].codigo == cod) {
        this.totalDinero -= (this.productosCarrito[i].precio * this.productosCantidad[i + 1].cant);
        this.productosCantidad[i + 1].cant = this.cantidad.value;
        this.totalDinero += (this.productosCarrito[i].precio * this.productosCantidad[i + 1].cant);
        localStorage.setItem("total", JSON.stringify(this.totalDinero))
      }
    }
    localStorage.setItem("cantidad", JSON.stringify(this.productosCantidad));
  }

  busquedaClave() {
    let pos = [];
    for (let i = 0; i < this.productosActual.length; i++) {
      if (this.productosActual[i].tags.search(this.clave.value) == -1) {
        pos.push(this.productosActual[i].codigo);
      }
      else {
        console.log('Encontrado');
      }
    }
    for (let j = 0; j < pos.length; j++) {
      for (let i = 0; i < this.productosActual.length; i++) {
        if (pos[j] == this.productosActual[i].codigo) {
          this.productosActual.splice(i, 1);
        }
      }
    }

  }

  quitarBusqueda() {
    this.productosActual = [];
    for (let i = 0; i < this.productosActual1.length; i++) {
      this.productosActual.push({
        codigo: this.productosActual1[i].codigo, nombre: this.productosActual1[i].nombre, precio: this.productosActual1[i].precio,
        descripcion: this.productosActual1[i].descripcion, img: this.productosActual1[i].img, tags: this.productosActual1[i].tags
      });
    }
    this.productosActual = this.productosActual1;
  }
}
