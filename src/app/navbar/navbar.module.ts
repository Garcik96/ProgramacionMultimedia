import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        MaterialModule,
        FontAwesomeModule,
        CommonModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {}