import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Global } from '../../../app.component';

@Component({
  selector: 'multimedia-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class MultimediaVideosComponent implements OnInit {
  @ViewChild('video') video: ElementRef;
  play = false;

  constructor(public global: Global) { }

  ngOnInit(): void {
  }

  playVideo(): void {
    this.video.nativeElement.play();
    this.play = true;
  }

  pauseVideo(): void {
    this.video.nativeElement.pause();
    this.play = false;
  }

  stopVideo(): void {
    this.video.nativeElement.pause();
    this.video.nativeElement.currentTime = 0;
    this.play = false;
  }
}