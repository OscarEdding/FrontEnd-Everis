import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cUser = "user";
  cPwd = "user";

  alertUser!: string;
  constructor(private router: Router, public nav: NavService) { }

  user = new FormControl('');
  pwd = new FormControl('');

  ngOnInit(): void {
    this.nav.hideNav()
  }

  validar() {
    if (this.user.value == this.cUser) {
      this.alertUser = "";
    }
    else {
      this.alertUser = "Usuario o password incorrecto";
    }
    if (this.pwd.value == this.cPwd) {
      this.alertUser = "";
    }
    else {
      this.alertUser = "Usuario o password incorrecto";
    }
    if (this.alertUser == "") {
      this.router.navigate(['productos']);
    }
  }
}
