import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashadministrador',
  templateUrl: './dashadministrador.component.html',
  styleUrls: ['./dashadministrador.component.scss']
})
export class DashadministradorComponent implements OnInit {

  constructor(public login: LoginService, private router: Router) { }
  user: any = null;

  ngOnInit(): void {
    this.user = this.login.getUser();
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['']);
  }
}
