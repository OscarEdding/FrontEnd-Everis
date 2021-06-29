import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  visible: boolean;

  constructor() { this.visible = false; }

  hideFooter() { this.visible = false; }

  showFooter() { this.visible = true; }

  toggleFooter() { this.visible = !this.visible; }

  doSomethingElseUsefulFooter() { }
}
