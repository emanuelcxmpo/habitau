import { authInterceptorProviders } from './services/auth.interceptor';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/public/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
import { FormhabitacionComponent } from './pages/private/formhabitacion/formhabitacion.component';
import { PagenotfoundComponent } from './pages/public/pagenotfound/pagenotfound.component';
import { DasharrendatarioComponent } from './pages/private/dasharrendatario/dasharrendatario.component';
import { DashadministradorComponent } from './pages/private/dashadministrador/dashadministrador.component';

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
    FormhabitacionComponent,
    PagenotfoundComponent,
    DasharrendatarioComponent,
    DashadministradorComponent,
  ],
  imports: [
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
