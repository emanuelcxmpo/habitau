import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  modalSwitch: boolean = false;

  forgotForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private modalSS: ModalService
  ) {}

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    });
  }

  openModal() {
    this.modalSwitch = true;
  }
}
