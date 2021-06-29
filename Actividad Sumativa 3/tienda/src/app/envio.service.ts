import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  envio:any

  constructor() { 
  }

  setEnvio(envio:any) {
    this.envio = envio
  }

  getEnvio() {
    return this.envio
  }

  
}
