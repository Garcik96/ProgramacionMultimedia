import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Global } from '../../../app.component';
import { interval } from 'rxjs';

@Component({
  selector: 'multimedia-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class MultimediaVideosComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video: ElementRef;
  play = false;
  maxValue: number = 100;
  volume: number = 0;
  valueVideo: number = 0;
  interval = interval(100);
  intervalSubscribe: any;
  playbackRate: number = 1;
  path: string = './assets/video/lebron.mp4';
  minutesVideo: number;
  currentMinutesVideo: number = 0;
  secondsVideo: number;
  currentSecondsVideo: number = 0;
  innerWidth: any;

  constructor(public global: Global) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {
    this.video.nativeElement.volume = this.volume;
    this.video.nativeElement.src = this.path;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  getDuration(event: any): void {
    this.minutesVideo = Math.trunc(this.video.nativeElement.duration / 60);
    this.secondsVideo = Math.trunc(this.video.nativeElement.duration % 60);
  }

  playPauseVideo(): void {
    if(!this.video.nativeElement.paused && !this.video.nativeElement.ended) {
      this.video.nativeElement.pause();
      this.play = false;
      this.intervalSubscribe.unsubscribe();
    } else {
      this.video.nativeElement.play();
      this.play = true;
      this.intervalSubscribe = this.interval.subscribe(x => {
        this.update();
      })
    }
  }

  stopVideo(): void {
    this.video.nativeElement.pause();
    this.video.nativeElement.currentTime = 0;
    this.playbackRate = 1;
    this.video.nativeElement.playbackRate = 1;
    this.play = false;
    this.currentMinutesVideo = 0;
    this.currentSecondsVideo = 0;
  }

  update(): any {
    if(!this.video.nativeElement.ended) {
      let value = this.video.nativeElement.currentTime * this.maxValue / this.video.nativeElement.duration;
      this.valueVideo = value;
      this.currentMinutesVideo = Math.trunc(this.video.nativeElement.currentTime / 60);
      this.currentSecondsVideo = Math.trunc(this.video.nativeElement.currentTime % 60);
    } else {
      this.stopVideo();
    }
  }

  changeTime(event: any): void {
    let value = event.value;
    let time = value * this.video.nativeElement.duration / this.maxValue;
    this.video.nativeElement.currentTime = time;
    this.valueVideo = value;
  }

  fastForwardVideo(): void {
    this.playbackRate++;
    this.video.nativeElement.playbackRate = this.playbackRate;
    if(this.video.nativeElement.paused || this.video.nativeElement.ended) {
      this.video.nativeElement.play();
      this.play = true;
      this.intervalSubscribe = this.interval.subscribe(x => {
        this.update();
      });
    }
  }

  fastRewindVideo(): void {
    if(this.playbackRate > 1) {
      this.playbackRate--;
      this.video.nativeElement.playbackRate = this.playbackRate;
    }
  }

  fullscreenVideo(): void {
    this.video.nativeElement.requestFullscreen();
  }

  changeVolume(event: any) {
    this.video.nativeElement.volume = event.value / 100;
  }
}