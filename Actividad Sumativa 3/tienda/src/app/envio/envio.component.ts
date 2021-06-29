import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavService } from '../nav.service';
import { FooterService } from '../footer.service';
import { EnvioService } from './../envio.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {
  title = 'example-react-form';
  public formEnvio!: FormGroup;

  total: any;
  carrito: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public nav: NavService, public footer: FooterService,
    private _servicio: EnvioService) {

    this.total = localStorage.getItem("total");

    this.carrito = localStorage.getItem("carrito");

  }



  ngOnInit(): void {

    this.nav.showNav();
    this.nav.doSomethingElseUsefulNav();
    this.footer.showFooter();
    this.footer.doSomethingElseUsefulFooter();

    this.formEnvio = this.formBuilder.group({
      country: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      type: ['', [Validators.required]],
      postal: ['', [Validators.required]]
    });
    // this.loadAPI();
  }


  loadAPI(): any {
    const response = {
      account: '1111 2222 3333 4444',
      password: '12345678',
      number: '0826',
      terms: true
    };

    this.formEnvio.patchValue(response);
  }



  send(): void {
    console.log(this.formEnvio.value);
    this._servicio.setEnvio(this.formEnvio.value)
    this.router.navigate(['/pago'])
  }


}
