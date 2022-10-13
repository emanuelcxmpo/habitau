import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacesnavComponent } from './spacesnav.component';

const routes: Routes = [{ path: '', component: SpacesnavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacesnavRoutingModule { }
