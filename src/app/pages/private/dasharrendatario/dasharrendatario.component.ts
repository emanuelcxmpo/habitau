import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasharrendatario',
  templateUrl: './dasharrendatario.component.html',
  styleUrls: ['./dasharrendatario.component.scss'],
})
export class DasharrendatarioComponent implements OnInit {
  user: any = null;
  constructor(public login: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.login.getUser();
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['']);
  }
}
