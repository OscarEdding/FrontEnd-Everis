import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  pago:any;
  
  constructor() { }

  setPago( pago:any ) { 
    this.pago = pago
  }

  getPago(){
    return this.pago
  }
}
