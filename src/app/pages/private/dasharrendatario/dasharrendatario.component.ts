import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasharrendatario',
  templateUrl: './dasharrendatario.component.html',
  styleUrls: ['./dasharrendatario.component.scss'],
})
export class DasharrendatarioComponent implements OnInit {
  titulo: string | undefined;
  user: any = null;
  constructor(public login: LoginService, private router: Router) {}

  ngOnInit(): void {
    // this.user = this.login.getUser();
    this.router.events.subscribe((val) => {
      if (this.router.url.includes('/arrendatario/home')) {
        this.titulo = 'Inicio';
      } else if (this.router.url.includes('/arrendatario/publish')) {
        this.titulo = 'Propiedades';
      } else if (this.router.url.includes('/arrendatario/profile')) {
        this.titulo = 'Perfil';
      } else if (this.router.url.includes('/arrendatario/registropropiedad')) {
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
