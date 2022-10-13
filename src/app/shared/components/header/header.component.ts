import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  modalSwitch: boolean = false;

  constructor(private modalSS:ModalService) {}

  ngOnInit(){
    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch = valor})
  }


  openModal() {
    this.modalSwitch = true;
  }
}
