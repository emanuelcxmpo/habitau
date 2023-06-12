import { LoginService } from './../../../services/login.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modalogin',
  templateUrl: './modalogin.component.html',
  styleUrls: ['./modalogin.component.scss'],
})
export class ModaloginComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  loginForm = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
  });

  // loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalSS: ModalService,
    private toast: NgToastService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.loginForm = this.initForm();
    // const userData = {
    //   username: 'emanuelcam',
    //   password: 'emanuelc12',
    // };
    // this.loginService.login(userData).subscribe((res) => {
    //   console.log('Login');
    // });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onLogin(): void {
    const formValue = this.loginForm.value as User;
    this.subscriptions.add(
      this.loginService.login(formValue).subscribe((res) => {
        if (res) {
          this.router.navigate(['administrador/home']);
        }
      })
    );
  }

  closeModal() {
    this.modalSS.$modal.emit(false);
  }
}

// formSubmit() {
//   let Form = JSON.stringify(this.loginForm.value);
//   this.loginService.generateToken(this.loginForm).subscribe(
//     (data: any) => {
//       console.log(Form);

//       this.loginService.loginUser(data.token);
//       this.loginService.getCurrentUser().subscribe((user: any) => {
//         this.loginService.setUser(user)
//         console.log(user);

//         if (this.loginService.getUserRole() == "ADMINISTRADOR") {
//           // window.location.href = '/administador';
//           this.router.navigate(['administrador/home']);
//           this.loginService.loginStatusSubject.next(true)
//         }
//         else if(this.loginService.getUserRole() == "ESTUDIANTE"){
//           // window.location.href = '/estudiante';
//           this.router.navigate(['estudiante/home']);
//           this.loginService.loginStatusSubject.next(true)
//         }
//         else if(this.loginService.getUserRole() == "ARRENDATARIO"){
//           // window.location.href = '/arrendatario';
//           this.router.navigate(['arrendatario/home']);
//           this.loginService.loginStatusSubject.next(true)
//         }
//         else {
//           this.loginService.logout();
//         }
//       });
//     },
//     (error) => {
//       console.log('Este error:', error);
//       this.toast.error({
//         detail: 'Mensaje',
//         summary: 'Datos de acceso invalidos',
//         sticky: true,
//         position: 'tr',
//         duration: 15000,
//       });
//       return;
//     }
//   );
//   this.closeModal();
// }
// }
