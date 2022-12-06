import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //Generación de tokens

  public generateToken(loginData:any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData)
  }

  // Iniciamos sesión y establecemos el token en el localstoage
  public loginUser(token:any) {
    localStorage.setItem('token', token)
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }else {
      return true;
    }
  }

  // Cerramos sesión y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }


  // Obtenemos el token
  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user:any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if(userStr != null) {
      return JSON.parse(userStr)
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser() {
    return this.http.get(`${baseUrl}/actual-usuario`);
  }
}
