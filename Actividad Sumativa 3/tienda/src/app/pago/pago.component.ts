import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavService } from '../nav.service';
import { FooterService } from '../footer.service';
import { Router } from '@angular/router'
import { PagoService } from '../pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  title = 'example-react-form';
  public formPago!: FormGroup;

  total: any;
  carrito: any;

  constructor(private router: Router, private formBuilder: FormBuilder, public nav: NavService, public footer: FooterService, private _pagoService: PagoService) {

    this.total = localStorage.getItem("total");

    this.carrito = localStorage.getItem("carrito");

  }


  ngOnInit(): void {

    this.nav.showNav();
    this.nav.doSomethingElseUsefulNav();
    this.footer.showFooter();
    this.footer.doSomethingElseUsefulFooter();

    this.formPago = this.formBuilder.group({
      card: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      account: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      number: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      type: ['', [Validators.required]],
      terms: ['', [Validators.required, Validators.requiredTrue]]
    });

    // this.loadAPI();
  }

  loadAPI(): any {
    const response = {
      name: "",
      account: '1111 2222 3333 4444',
      password: '12345678',
      number: '0826',
      terms: true
    };


    this.formPago.patchValue(response);

  }

  send(): any {
    console.log(this.formPago.value);
    this._pagoService.setPago(this.formPago.value)
    this.router.navigate(['/factura'])
  }

}
