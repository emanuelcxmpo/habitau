import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modalogin',
  templateUrl: './modalogin.component.html',
  styleUrls: ['./modalogin.component.scss']
})
export class ModaloginComponent implements OnInit {

  constructor(private modalSS:ModalService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalSS.$modal.emit(false)
  }
}
