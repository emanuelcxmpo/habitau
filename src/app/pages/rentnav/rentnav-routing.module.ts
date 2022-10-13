import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentnavComponent } from './rentnav.component';

const routes: Routes = [{ path: '', component: RentnavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentnavRoutingModule { }
