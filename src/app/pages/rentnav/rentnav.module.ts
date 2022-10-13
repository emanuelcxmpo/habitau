import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentnavRoutingModule } from './rentnav-routing.module';
import { RentnavComponent } from './rentnav.component';


@NgModule({
  declarations: [
    RentnavComponent
  ],
  imports: [
    CommonModule,
    RentnavRoutingModule
  ]
})
export class RentnavModule { }
