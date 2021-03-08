import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Global } from '../../app.component';

interface Audio {
  view: string;
  value: string;
}

@Component({
  selector: 'nuestros-audios',
  templateUrl: './nuestros-audios.component.html',
  styleUrls: ['./nuestros-audios.component.scss']
})
export class NuestrosAudiosComponent implements OnInit {
  innerWidth: any;

  audios: Audio[] = [
      {view: 'Audio 1', value: './assets/audio/audio1.mp3'},
      {view: 'Audio 2', value: './assets/audio/audio2.mp3'},
      {view: 'Audio 3', value: './assets/audio/audio3.mp3'}
  ];

  audioValue: string = this.audios[0].value;
  audioView: string = this.audios[0].view;

  constructor(public global: Global) {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  changeValues(value: string, view: string): void {
    this.audioValue = value;
    this.audioView = view;
  }

}