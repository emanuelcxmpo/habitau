import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  modalSwitch: boolean = false;

  constructor(private modalSS:ModalService, public login:LoginService, private router: Router) {}

  ngOnInit(){
    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch = valor})
  }


  openModal() {
    this.modalSwitch = true;
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['']);
  }
}
