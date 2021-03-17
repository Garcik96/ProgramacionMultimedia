import { Component, OnInit } from '@angular/core';
import { Global } from '../app.component';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { Feature } from 'ol';
import Geolocation from 'ol/Geolocation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './contacta-con-nosotros.component.html',
  styleUrls: ['./contacta-con-nosotros.component.scss', '../nuestros-trabajos/nuestros-audios/nuestros-audios.component.scss']
})
export class ContactoComponent implements OnInit {
  map: Map;
  view: View;
  position: Feature;
  geolocation: Geolocation;
  durationInSeconds = 5;
  form: FormGroup;

  constructor(public global: Global, private formBuilder: FormBuilder, private matSnackBar: MatSnackBar) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.view = new View({
      center: olProj.fromLonLat([-0.424609, 39.512531]),
      zoom: 18,
    });

    this.map = new Map({
      target: 'map-open-layers',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: this.view,
    });
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      nombre: [null],
      apellidos: [null],
      telefono: [null, [Validators.required, Validators.pattern('[0-9]{9}')]],
      correoElectronico: [null, [Validators.required, Validators.pattern('.*@.*\\..*')]],
      comentario: [null]
    })
  }

  get telefono(): any {
    return this.form.get('telefono');
  }

  get correoElectronico(): any {
    return this.form.get('correoElectronico');
  }

  submit(): void {
    if(this.confirmForm()) {
      this.succesSnackBar();
    } else {
      this.errorSnackBar();
    }
  }

  confirmForm(): boolean {
    if(this.form.valid) {
      return true;
    } else {
      this.form.markAllAsTouched();
      return false;
    }
  }

  succesSnackBar() {
    this.matSnackBar.open('¡Gracias por contactar con nostros!','Cerrar', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['succes-snackbar']
    });
  }

  errorSnackBar() {
    this.matSnackBar.open('Algunos campos son incorrectos y/o obligatorios','Cerrar', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar']
    });
  }
}
