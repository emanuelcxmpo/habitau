import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactnavComponent } from './contactnav.component';

const routes: Routes = [{ path: '', component: ContactnavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactnavRoutingModule { }
