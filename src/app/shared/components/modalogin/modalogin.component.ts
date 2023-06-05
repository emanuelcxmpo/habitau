import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalogin',
  templateUrl: './modalogin.component.html',
  styleUrls: ['./modalogin.component.scss'],
})
export class ModaloginComponent implements OnInit {
  loginForm!: FormGroup;
  

  // loginData = {
  //   username: '',
  //   password: '',
  // };

  constructor(
    private formBuilder: FormBuilder,
    private modalSS: ModalService,
    private toast: NgToastService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  closeModal() {
    this.modalSS.$modal.emit(false);
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      usuario: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  formSubmit() {
    let Form = JSON.stringify(this.loginForm.value);
    this.loginService.generateToken(this.loginForm).subscribe(
      (data: any) => {
        console.log(Form);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user)
          console.log(user);

          if (this.loginService.getUserRole() == "ADMINISTRADOR") {
            // window.location.href = '/administador';
            this.router.navigate(['administrador/home']);
            this.loginService.loginStatusSubject.next(true)
          }
          else if(this.loginService.getUserRole() == "ESTUDIANTE"){
            // window.location.href = '/estudiante';
            this.router.navigate(['estudiante/home']);
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
        console.log('Este error:', error);
        this.toast.error({
          detail: 'Mensaje',
          summary: 'Datos de acceso invalidos',
          sticky: true,
          position: 'tr',
          duration: 15000,
        });
        return;
      }
    );
    this.closeModal();
  }
}
