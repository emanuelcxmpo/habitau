import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formhabitacion',
  templateUrl: './formpropiedad.component.html',
  styleUrls: ['./formpropiedad.component.scss'],
})
export class FormpropiedadComponent implements OnInit {
  public propiedad = {
    nombre: '',
    direccion: '',
    tipopropiedad: '',
    habitaciones: '',
    banos: '',
    precio: '',
    descripcion: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
