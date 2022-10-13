import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorenavComponent } from './explorenav.component';

const routes: Routes = [{ path: '', component: ExplorenavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorenavRoutingModule { }
