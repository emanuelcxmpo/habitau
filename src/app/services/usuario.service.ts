import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../shared/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  public registroUsuario(registerForm: any) {
    return this.httpClient.post(`${baseUrl}/usuarios/`, registerForm);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(`${baseUrl}/user/`)
      .pipe(catchError(this.handleError));
  }

  newUsers(user: User): Observable<User> {
    return this.httpClient
      .post<User>(`${baseUrl}/user/register`, user)
      .pipe(catchError(this.handleError));
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.httpClient
      .patch<User>(`${baseUrl}/user/${id}`, user)
      .pipe(catchError(this.handleError));
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient
      .delete<User>(`${baseUrl}/user/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any): Observable<never> {
    let errorMessage = 'An error ocurred retrieving data';
    if (error) {
      errorMessage = `Error: code ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public eliminarUsuario(userId: any) {
    return this.httpClient.delete(`${baseUrl}/usuarios/${userId}`);
  }

  public listarPropiedades() {
    return this.httpClient.get(`${baseUrl}/usuarios/`);
  }
}
