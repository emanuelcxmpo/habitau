import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactnavRoutingModule } from './contactnav-routing.module';
import { ContactnavComponent } from './contactnav.component';


@NgModule({
  declarations: [
    ContactnavComponent
  ],
  imports: [
    CommonModule,
    ContactnavRoutingModule
  ]
})
export class ContactnavModule { }
