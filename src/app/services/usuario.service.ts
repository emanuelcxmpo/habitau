import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  public registroUsuario(user: any) {
    return this.httpClient.post(`${baseUrl}/usuarios/`, user);
  }

  public eliminarUsuario(userId:any){
    return this.httpClient.delete(`${baseUrl}/usuarios/${userId}`);
  }

  public listarPropiedades(){
    return this.httpClient.get(`${baseUrl}/usuarios/`);
  }

}
