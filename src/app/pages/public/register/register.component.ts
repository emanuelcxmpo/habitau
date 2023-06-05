import { UsuarioService } from '../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;    

  // public user = {
  //   perfil: '',
  //   nombres: '',
  //   apellidos: '',
  //   telefono: '',
  //   email: '',
  //   username: '',
  //   password: '',
  // };

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      perfilUsuario: ['', Validators.required],
      nombres: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      apellidos: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      correoElectronico: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
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
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
      checkValidacion: ['', Validators.requiredTrue],
    });
  }

  // enviarData() {
  //   if (this.registerForm.valid) {
  //     console.log(this.registerForm.value);
  //     this.registerForm.reset();
  //   } else {
  //     this.toast.info({
  //       detail: 'Mensaje',
  //       summary: 'Algunos campos no son validos',
  //       sticky: true,
  //       position: 'tr',
  //       duration: 5000,
  //     });
  //   }
  // }

  enviarData() {
    console.log(this.registerForm.value);

    this.usuarioService.registroUsuario(this.registerForm.value).subscribe(
      (data) => {
        console.log(data);
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
