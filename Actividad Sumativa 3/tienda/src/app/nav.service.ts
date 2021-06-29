import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  visible: boolean;

  constructor() { this.visible = false; }

  hideNav() { this.visible = false; }

  showNav() { this.visible = true; }

  toggleNav() { this.visible = !this.visible; }

  doSomethingElseUsefulNav() { }
}
