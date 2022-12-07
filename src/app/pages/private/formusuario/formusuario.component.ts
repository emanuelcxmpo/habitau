import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.scss']
})
export class FormusuarioComponent implements OnInit {
  user: any = null;
  constructor(public LoginService: LoginService) { }

  ngOnInit(): void {
    this.user = this.LoginService.getUser();
  }

}
