import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArrendatarioGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.loginService.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => {
        if (!isLogged) {
          this.router.navigate(['administrador/home']);
          return false;
        }
        return true;
      })
    );
    // if(this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'ARRENDATARIO'){
    //   return true;
    // }

    // this.router.navigate(['login']);
    // return false;
  }
}
