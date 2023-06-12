import { AdmintipopropiedadesComponent } from './pages/private/admintipopropiedades/admintipopropiedades.component';
import { AdminprofileComponent } from './pages/private/adminprofile/adminprofile.component';
import { AdministradorComponent } from './pages/private/administrador/administrador.component';
import { FormusuarioComponent } from './pages/private/formusuario/formusuario.component';
import { DashadministradorComponent } from './pages/private/dashadministrador/dashadministrador.component';
import { PropiedadesComponent } from './pages/private/propiedades/propiedades.component';
import { HomeComponent } from './pages/private/home/home.component';
import { FormpropiedadComponent } from './pages/private/formpropiedad/formpropiedad.component';
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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorGuard } from './services/administrador.guard';
import { ForgotpasswordComponent } from './pages/public/forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: '', component: SectiononeComponent },
  { path: 'about', component: AboutnavComponent },
  { path: 'explore', component: ExplorenavComponent },
  { path: 'spaces', component: SpacesnavComponent },
  { path: 'contact', component: ContactnavComponent },
  { path: 'rent', component: RentnavComponent },
  { path: 'forgot', component: ForgotpasswordComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'estudiante',
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
        component: FormpropiedadComponent,
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
        component: FormpropiedadComponent,
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
        path: 'admin',
        component: AdministradorComponent,
      },
      {
        path: 'tipopropiedades',
        component: AdmintipopropiedadesComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'users',
        component: AdminprofileComponent,
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
