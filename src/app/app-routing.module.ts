import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/aboutnav/aboutnav.module').then((m) => m.AboutnavModule),
  },
  { path: 'explore', loadChildren: () => import('./pages/explorenav/explorenav.module').then(m => m.ExplorenavModule) },
  { path: 'spaces', loadChildren: () => import('./pages/spacesnav/spacesnav.module').then(m => m.SpacesnavModule) },
  { path: 'contact', loadChildren: () => import('./pages/contactnav/contactnav.module').then(m => m.ContactnavModule) },
  { path: 'rent', loadChildren: () => import('./pages/rentnav/rentnav.module').then(m => m.RentnavModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
