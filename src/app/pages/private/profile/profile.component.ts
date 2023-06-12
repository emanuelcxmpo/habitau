import { Router } from '@angular/router';
import { UsuarioService } from './../../../services/usuario.service';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor(
    public loginService: LoginService,
    private usuarioService: UsuarioService,
    private toast: NgToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.user = this.loginService.getUser();
  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  eliminarUsuario(userId: any) {
    this.usuarioService.eliminarUsuario(userId).subscribe(
      (data) => {
        this.user = this.user.filter((user: any) => user.userId != userId);
        this.logout();
        this.toast.success({
          detail: 'Mensaje',
          summary: 'Usuario eliminado correctamente',
          sticky: true,
          position: 'tr',
        });
      },
      (error) => {
        this.toast.error({
          detail: 'Error',
          summary: 'Ha ocurrido un error en base de datos',
          sticky: true,
          position: 'tr',
        });
      }
    );
  }
}
