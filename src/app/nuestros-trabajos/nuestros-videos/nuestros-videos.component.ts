import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Global } from '../../app.component';

@Component({
  selector: 'nuestros-videos',
  templateUrl: './nuestros-videos.component.html',
  styleUrls: ['./nuestros-videos.component.scss']
})
export class NuestrosVideosComponent implements OnInit {
  @ViewChild('video') myVideo: ElementRef;
  play = false;

  constructor(public global: Global) { }

  ngOnInit(): void {
  }

  playVideo(video: any): void {
    video.play();
    this.play = true;
  }

  pauseVideo(video: any): void {
    video.pause();
    this.play = false;
  }

  stopVideo(video: any): void {
    this.myVideo.nativeElement.currentTime = 0;
  }

}