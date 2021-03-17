import { NgModule } from '@angular/core';
import { ContactoComponent } from './contacta-con-nosotros.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ContactoComponent],
    imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
    exports: [ContactoComponent]
})
export class ContactoModule {}