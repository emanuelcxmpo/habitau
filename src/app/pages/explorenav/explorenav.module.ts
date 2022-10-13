import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorenavRoutingModule } from './explorenav-routing.module';
import { ExplorenavComponent } from './explorenav.component';


@NgModule({
  declarations: [
    ExplorenavComponent
  ],
  imports: [
    CommonModule,
    ExplorenavRoutingModule
  ]
})
export class ExplorenavModule { }
