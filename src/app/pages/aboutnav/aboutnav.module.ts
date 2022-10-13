import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutnavRoutingModule } from './aboutnav-routing.module';
import { AboutnavComponent } from './aboutnav.component';


@NgModule({
  declarations: [
    AboutnavComponent
  ],
  imports: [
    CommonModule,
    AboutnavRoutingModule
  ]
})
export class AboutnavModule { }
