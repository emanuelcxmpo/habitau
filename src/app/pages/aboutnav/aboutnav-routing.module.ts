import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutnavComponent } from './aboutnav.component';

const routes: Routes = [{ path: '', component: AboutnavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutnavRoutingModule { }
