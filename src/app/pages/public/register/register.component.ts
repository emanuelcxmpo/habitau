import { UsuarioService } from '../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {}

  registerForm = this.formBuilder.group({
    role: ['', Validators.required],
    first_name: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    ],
    last_name: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(30)],
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    username: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ],
    ],
    checkValidacion: ['', Validators.requiredTrue],
  });

  onSave(): void {
    const formValue = this.registerForm.value as User;
    console.log('Saved =>', this.registerForm.value);
    this.usuarioService.newUsers(formValue).subscribe(
      (res) => {
        console.log(res);
        this.toast.success({
          detail: 'Mensaje',
          summary: 'Usuario registrado correctamente',
          sticky: true,
          position: 'tr',
          duration: 5000,
        });
      },
      (error) => {
        console.log(error);
        this.toast.error({
          detail: 'Mensaje',
          summary: 'Ha ocurrido un error en la base de datos',
          sticky: true,
          position: 'tr',
          duration: 5000,
        });
      }
    );
    this.registerForm.reset();
  }
}
