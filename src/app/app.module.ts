import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { SectiononeComponent } from './shared/components/sectionone/sectionone.component';
import { SectiontwoComponent } from './shared/components/sectiontwo/sectiontwo.component';
import { SectionthreeComponent } from './shared/components/sectionthree/sectionthree.component';
import { ModaloginComponent } from './shared/components/modalogin/modalogin.component';
import { SectionfourComponent } from './shared/components/sectionfour/sectionfour.component';
import { SectionfiveComponent } from './shared/components/sectionfive/sectionfive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    SectiononeComponent,
    SectiontwoComponent,
    SectionthreeComponent,
    ModaloginComponent,
    SectionfourComponent,
    SectionfiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
