import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashadministrador',
  templateUrl: './dashadministrador.component.html',
  styleUrls: ['./dashadministrador.component.scss'],
})
export class DashadministradorComponent implements OnInit {
  constructor(public login: LoginService, private router: Router) {}
  titulo: string | undefined;
  user: any = null;

  ngOnInit(): void {
    this.user = this.login.isLogged;
    this.router.events.subscribe((val) => {
      if (this.router.url.includes('/administrador/home')) {
        this.titulo = 'Inicio';
      } else if (this.router.url.includes('/administrador/admin')) {
        this.titulo = 'Administrar';
      } else if (this.router.url.includes('/administrador/users')) {
        this.titulo = 'Administrar usuarios';
      } else if (this.router.url.includes('/administrador/profile')) {
        this.titulo = 'Perfil';
      } else if (this.router.url.includes('/administrador/registropropiedad')) {
        this.titulo = 'Registrar propiedad ';
      } else {
        this.titulo = 'HabitaU';
      }
    });
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['']);
  }
}
