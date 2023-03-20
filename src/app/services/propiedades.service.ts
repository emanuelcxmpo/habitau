import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class PropiedadesService {
  constructor(private http: HttpClient) {}

  public registrarPropiedad(propiedad: any) {
    return this.http.post(`${baseUrl}/propiedades/`, propiedad);
  }
  public listarPropiedades() {
    return this.http.get(`${baseUrl}/propiedades/`);
  }
}
