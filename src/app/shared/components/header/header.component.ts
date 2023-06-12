import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAdmin = null;
  modalSwitch: boolean = false;
  isLogged: boolean = false;

  private destroy$ = new Subject<any>();

  constructor(
    private modalSS: ModalService,
    public login: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.modalSS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    });

    document.addEventListener('DOMContentLoaded', () => {
      // open
      const burger = document.querySelectorAll('.navbar-burger');
      const menu = document.querySelectorAll('.navbar-menu');

      if (burger.length && menu.length) {
        burger.forEach((el) => {
          el.addEventListener('click', () => {
            menu.forEach((m) => {
              m.classList.toggle('hidden');
            });
          });
        });
      }

      // close
      const close = document.querySelectorAll('.navbar-close');
      const backdrop = document.querySelectorAll('.navbar-backdrop');

      if (close.length) {
        close.forEach((el) => {
          el.addEventListener('click', () => {
            menu.forEach((m) => {
              m.classList.toggle('hidden');
            });
          });
        });
      }

      if (backdrop.length) {
        backdrop.forEach((el) => {
          el.addEventListener('click', () => {
            menu.forEach((m) => {
              m.classList.toggle('hidden');
            });
          });
        });
      }
    });

    this.login.isLogged
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => (this.isLogged = res));

    this.login.isAdmin$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: null) => (this.isAdmin = res));
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  openModal() {
    this.modalSwitch = true;
  }

  // public publicar() {
  //   if (this.login.getUserRole() == "ARRENDATARIO"){
  //     this.router.navigate(['arrendatario/publish']);
  //     this.login.loginStatusSubject.next(true)
  //   }
  // }

  // public perfil() {
  //   if (this.login.getUserRole() == "ADMINISTRADOR") {
  //     this.router.navigate(['administrador/home']);
  //     this.login.loginStatusSubject.next(true)
  //   }
  //   else if(this.login.getUserRole() == "ESTUDIANTE"){
  //     this.router.navigate(['estudiante/home']);
  //     this.login.loginStatusSubject.next(true)
  //   }
  //   else if(this.login.getUserRole() == "ARRENDATARIO"){
  //     this.router.navigate(['arrendatario/home']);
  //     this.login.loginStatusSubject.next(true)
  //   }
  //   else {
  //     this.login.logout();
  //   }
  // }
}
