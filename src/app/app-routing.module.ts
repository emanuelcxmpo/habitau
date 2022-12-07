import { FormusuarioComponent } from './pages/private/formusuario/formusuario.component';
import { DashadministradorComponent } from './pages/private/dashadministrador/dashadministrador.component';
import { PropiedadesComponent } from './pages/private/propiedades/propiedades.component';
import { HomeComponent } from './pages/private/home/home.component';
import { FormhabitacionComponent } from './pages/private/formhabitacion/formhabitacion.component';
import { ProfileComponent } from './pages/private/profile/profile.component';
import { ArrendatarioGuard } from './services/arrendatario.guard';
import { DasharrendatarioComponent } from './pages/private/dasharrendatario/dasharrendatario.component';
import { PagenotfoundComponent } from './pages/public/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { RentnavComponent } from './pages/public/rentnav/rentnav.component';
import { ContactnavComponent } from './pages/public/contactnav/contactnav.component';
import { SpacesnavComponent } from './pages/public/spacesnav/spacesnav.component';
import { ExplorenavComponent } from './pages/public/explorenav/explorenav.component';
import { AboutnavComponent } from './pages/public/aboutnav/aboutnav.component';
import { SectiononeComponent } from './shared/components/sectionone/sectionone.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorGuard } from './services/administrador.guard';

const routes: Routes = [
  { path: '', component: SectiononeComponent },
  { path: 'about', component: AboutnavComponent },
  { path: 'explore', component: ExplorenavComponent },
  { path: 'spaces', component: SpacesnavComponent },
  { path: 'contact', component: ContactnavComponent },
  { path: 'rent', component: RentnavComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'arrendatario',
    component: DasharrendatarioComponent,
    canActivate: [ArrendatarioGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'publish',
        component: PropiedadesComponent,
      },
      {
        path: 'registropropiedad',
        component: FormhabitacionComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'update',
        component: FormusuarioComponent,
      },
    ],
  },
  {
    path: 'administrador',
    component: DashadministradorComponent,
    canActivate: [AdministradorGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'users',
        component: PropiedadesComponent,
      },
    ],
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
