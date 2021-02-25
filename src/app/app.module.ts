import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { NuestrosTrabajosModule } from './nuestros-trabajos/nuestros-trabajos.module';
import { ContactoModule } from './contacta-con-nosotros/contacta-con-nosotros.module';

import { AppComponent, Global } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    NuestrosTrabajosModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ContactoModule
  ],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule { }
