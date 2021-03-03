import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Global } from '../../../app.component';
import { faVolumeUp, faVolumeMute, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import { interval } from 'rxjs';

@Component({
  selector: 'multimedia-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class MultimediaVideosComponent implements OnInit {
  @ViewChild('video') video: ElementRef;
  play = false;
  maxValue: number = 100;
  volume: number = 0;
  valueVideo: number = 0;
  interval = interval(100);
  intervalSubscribe: any;

  constructor(public global: Global) { }

  ngOnInit(): void {

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
    this.play = false;
  }

  update(): any {
    if(!this.video.nativeElement.ended) {
      let value = this.video.nativeElement.currentTime * this.maxValue / this.video.nativeElement.duration;
      this.valueVideo = value;
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

  changeVolume(event: any) {
    this.video.nativeElement.volume = event.value / 100;
  }

  volumeUpIcon(): any {
    if(this.volume === 0) {
      return faVolumeMute;
    } else if(this.volume <= 30){
      return faVolumeDown;
    } else {
      return faVolumeUp;
    }
  }
}