import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-contactnav',
  templateUrl: './contactnav.component.html',
  styleUrls: ['./contactnav.component.scss'],
})
export class ContactnavComponent implements OnInit {
  contactoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toast: NgToastService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.contactoForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(50)]],
      correoElectronico: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      numeroTelefono: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      tipoSolicitud: ['', Validators.required],
      mensaje: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(255),
        ],
      ],
      checkValidacion: ['', Validators.requiredTrue],
    });
  }

  envioCorreo() {
    let params = {
      email: this.contactoForm.value.correoElectronico,
      asunto: this.contactoForm.value.tipoSolicitud,
      mensaje: this.contactoForm.value.mensaje,
    };
    console.log(params);

    this.httpClient
      .post('http://localhost:3000/enviar', params)
      .subscribe((res) => {
        console.log(res);
      });
  }

  enviarData() {
    if (this.contactoForm.valid) {
      console.log(this.contactoForm.value);
      this.contactoForm.reset();
    } else {
      this.toast.info({
        detail: 'Mensaje',
        summary: 'Algunos campos no son validos',
        sticky: true,
        position: 'tr',
        duration: 5000,
      });
    }
  }
}
