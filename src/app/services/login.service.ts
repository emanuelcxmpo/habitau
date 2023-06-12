import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import baseUrl from './helper';
import { Role, User, UserResponse } from '../shared/models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private role = new BehaviorSubject<Role>(1);
  isAdmin$: any;

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get isAdmin(): Observable<any> {
    return this.role.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(`${baseUrl}/user/login`, authData).pipe(
      map((res: UserResponse) => {
        console.log('Res from login', res);
        this.saveLocalStorage(res);
        this.loggedIn.next(true);
        this.role.next(res.role);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.router.navigate(['']);
  }

  private checkToken(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user) {
      const isExpired = helper.isTokenExpired(user.token);
      if (isExpired) {
        this.logout();
      } else {
        this.loggedIn.next(true);
        this.role.next(user.role);
      }
    }
  }

  private saveLocalStorage(user: UserResponse): void {
    const { id, message, ...rest } = user;
    localStorage.setItem('user', JSON.stringify(rest));
  }

  private handlerError(err: any): Observable<never> {
    let errorMessage = 'An error ocurred retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  // -------------------------------------------------------------

  // Cerramos sesión y eliminamos el token del localStorage

  // // Obtenemos el token
  // public getToken() {
  //   return localStorage.getItem('token');
  // }

  // public setUser(user: any) {
  //   localStorage.setItem('user', JSON.stringify(user));
  // }

  // public getUser() {
  //   let userStr = localStorage.getItem('user');
  //   if (userStr != null) {
  //     return JSON.parse(userStr);
  //   } else {
  //     this.logout();
  //     return null;
  //   }
  // }

  // public getUserRole() {
  //   let user = this.getUser();
  //   return user.authorities[0].authority;
  // }

  // public getCurrentUser() {
  //   return this.http.get(`${baseUrl}/actual-usuario`);
  // }
}
