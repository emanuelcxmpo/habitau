import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { authInterceptorProviders } from './services/auth.interceptor';
import { RegisterComponent } from './pages/public/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ModaloginComponent } from './shared/components/modalogin/modalogin.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { SectiononeComponent } from './shared/components/sectionone/sectionone.component';
import { SectiontwoComponent } from './shared/components/sectiontwo/sectiontwo.component';
import { SectionthreeComponent } from './shared/components/sectionthree/sectionthree.component';
import { SectionfourComponent } from './shared/components/sectionfour/sectionfour.component';
import { SectionfiveComponent } from './shared/components/sectionfive/sectionfive.component';
import { SectionsixComponent } from './shared/components/sectionsix/sectionsix.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormpropiedadComponent } from './pages/private/formpropiedad/formpropiedad.component';
import { PagenotfoundComponent } from './pages/public/pagenotfound/pagenotfound.component';
import { DasharrendatarioComponent } from './pages/private/dasharrendatario/dasharrendatario.component';
import { DashadministradorComponent } from './pages/private/dashadministrador/dashadministrador.component';
import { ProfileComponent } from './pages/private/profile/profile.component';
import { HomeComponent } from './pages/private/home/home.component';
import { PropiedadesComponent } from './pages/private/propiedades/propiedades.component';
import { FormusuarioComponent } from './pages/private/formusuario/formusuario.component';
import { AdministradorComponent } from './pages/private/administrador/administrador.component';
import { AdminprofileComponent } from './pages/private/adminprofile/adminprofile.component';
import { AdminuniversitiesComponent } from './pages/private/adminuniversities/adminuniversities.component';
import { AdmintipopropiedadesComponent } from './pages/private/admintipopropiedades/admintipopropiedades.component';
import { AdminambienteComponent } from './pages/private/adminambiente/adminambiente.component';
import { ContactnavComponent } from './pages/public/contactnav/contactnav.component';
import { ForgotpasswordComponent } from './pages/public/forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModaloginComponent,
    HeroComponent,
    SectiononeComponent,
    SectiontwoComponent,
    SectionthreeComponent,
    SectionfourComponent,
    SectionfiveComponent,
    SectionsixComponent,
    FooterComponent,
    RegisterComponent,
    FormpropiedadComponent,
    PagenotfoundComponent,
    DasharrendatarioComponent,
    DashadministradorComponent,
    ProfileComponent,
    HomeComponent,
    PropiedadesComponent,
    FormusuarioComponent,
    AdministradorComponent,
    AdminprofileComponent,
    AdminuniversitiesComponent,
    AdmintipopropiedadesComponent,
    AdminambienteComponent,
    ContactnavComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
