import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ErrorTailorModule } from '@ngneat/error-tailor';

import { EnvioService } from './envio.service';
import { PagoService } from './pago.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { ProductosComponent } from './productos/productos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { FacturaComponent } from './factura/factura.component';
import { EnvioComponent } from './envio/envio.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '#',
  component: LoginComponent
},
{
  path: 'productos',
  component: ProductosComponent
},
{
  path: 'envio',
  component: EnvioComponent
},
{
  path: 'pago',
  component: PagoComponent
},
{
  path: 'factura',
  component: FacturaComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagoComponent,
    ProductosComponent,
    FooterComponent,
    NavComponent,
    FacturaComponent,
    EnvioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) =>
            `Se esperan ${requiredLength} caracteres, pero obtuve ${actualLength}`
        }
      }
    })

  ],
  providers: [
    EnvioService,
    PagoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
