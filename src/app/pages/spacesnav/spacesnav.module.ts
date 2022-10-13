import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacesnavRoutingModule } from './spacesnav-routing.module';
import { SpacesnavComponent } from './spacesnav.component';


@NgModule({
  declarations: [
    SpacesnavComponent
  ],
  imports: [
    CommonModule,
    SpacesnavRoutingModule
  ]
})
export class SpacesnavModule { }
