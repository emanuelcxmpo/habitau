import { NgToastService } from 'ng-angular-popup';
import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss'],
})
export class AdminprofileComponent implements OnInit {
  user: any = [];

  constructor(
    private usuarioService: UsuarioService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.usuarioService.listarPropiedades().subscribe(
      (dato: any) => {
        this.user = dato;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
        this.toast.warning({
          detail: 'Mensaje',
          summary: 'Error al cargar los usuarios',
          sticky: true,
          position: 'tr',
        });
      }
    );
  }
}
