import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Global } from '../../app.component';

@Component({
  selector: 'nuestros-videos',
  templateUrl: './nuestros-videos.component.html',
  styleUrls: ['./nuestros-videos.component.scss']
})
export class NuestrosVideosComponent implements OnInit {
  innerWidth: any;

  constructor(public global: Global) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}