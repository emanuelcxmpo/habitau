import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalogin',
  templateUrl: './modalogin.component.html',
  styleUrls: ['./modalogin.component.scss'],
})
export class ModaloginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private modalSS: ModalService,
    private toast: NgToastService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  closeModal() {
    this.modalSS.$modal.emit(false);
  }

  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username.trim() == null
    ) {
      this.toast.error({
        detail: 'Mensaje',
        summary: 'El usuario es requerido',
        sticky: true,
        position: 'tr',
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password.trim() == null
    ) {
      this.toast.error({
        detail: 'Mensaje',
        summary: 'La contraseña es requerido',
        sticky: true,
        position: 'tr',
        duration: 3000,
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user)
          console.log(user);

          if (this.loginService.getUserRole() == "ADMIN") {
            // window.location.href = '/administador';
            this.router.navigate(['administador/home']);
            this.loginService.loginStatusSubject.next(true)
          }
          else if(this.loginService.getUserRole() == "ARRENDATARIO"){
            // window.location.href = '/arrendatario';
            this.router.navigate(['arrendatario/home']);
            this.loginService.loginStatusSubject.next(true)
          }
          else {
            this.loginService.logout();
          }
        });
      },
      (error) => {
        console.log('Este error', error);
        this.toast.error({
          detail: 'Mensaje',
          summary: 'Datos de acceso invalidos, intentarlo nuevamente',
          sticky: true,
          position: 'tr',
          duration: 3000,
        });
        return;
      }
    );

    this.closeModal();
  }
}
