import { PropiedadesService } from './../../../services/propiedades.service';
import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explorenav',
  templateUrl: './explorenav.component.html',
  styleUrls: ['./explorenav.component.scss'],
})
export class ExplorenavComponent implements OnInit {
  propiedad: any = [];

  constructor(
    private toast: NgToastService,
    private propiedadService: PropiedadesService
  ) {}

  ngOnInit(): void {
    this.propiedadService.listarPropiedades().subscribe(
      (dato: any) => {
        this.propiedad = dato;
        console.log(this.propiedad);
      },
      (error) => {
        console.log(error);
        this.toast.warning({
          detail: 'Mensaje',
          summary: 'Error al cargar las propiedades',
          sticky: true,
          position: 'tr',
        });
      }
    );
  }
}
