import { UsuarioService } from '../../../services/usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public user = {
    perfil: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    username: '',
    password: '',
  };

  constructor(
    private usuarioService: UsuarioService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {}

  formSubmit(formulario: NgForm) {
    console.log(this.user);

    if (this.user.nombres == '' || this.user.nombres == null) {
      this.toast.warning({
        detail: 'Mensaje',
        summary: 'El nombre es requerido',
        sticky: true,
        position: 'tr',
      });
      return;
    }

    if (this.user.apellidos == '' || this.user.apellidos == null) {
      this.toast.warning({
        detail: 'Mensaje',
        summary: 'Los apellidos son requeridos',
        sticky: true,
        position: 'tr',
      });
      return;
    }

    if (this.user.telefono == '' || this.user.telefono == null) {
      this.toast.warning({
        detail: 'Mensaje',
        summary: 'El numero de celular es requerido',
        sticky: true,
        position: 'tr',
      });
      return;
    }

    if (this.user.email == '' || this.user.email == null) {
      this.toast.warning({
        detail: 'Mensaje',
        summary: 'El correo es requerido',
        sticky: true,
        position: 'tr',
      });
      return;
    }

    if (this.user.username == '' || this.user.username == null) {
      this.toast.error({
        detail: 'Mensaje',
        summary: 'El user es requerido',
        sticky: true,
        position: 'tr',
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      this.toast.error({
        detail: 'Mensaje',
        summary: 'La contraseña es requerida',
        sticky: true,
        position: 'tr',
      });
      return;
    }

    this.usuarioService.registroUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        this.toast.success({
          detail: 'Mensaje',
          summary: 'Usuario registrado correctamente',
          sticky: true,
          position: 'tr',
        });
      },
      (error) => {
        console.log(error);
        this.toast.error({
          detail: 'Mensaje',
          summary: 'Ha ocurrido un error en la base de datos',
          sticky: true,
          position: 'tr',
        });
      }
    );
    formulario.resetForm();
  }
}
