import { Component, ElementRef, Input, OnInit, OnChanges, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { interval } from 'rxjs';
import { Global } from '../../../app.component';

@Component({
  selector: 'multimedia-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class MultimediaAudiosComponent implements OnInit, OnChanges, AfterViewInit {
  innerWidth: any;
  @ViewChild('audio') audio: ElementRef;
  @Input() path = "";
  @Input() fileName = "";
  play = false;
  maxValue: number = 100;
  volume: number = 50;
  valueAudio: number = 0;
  interval = interval(100);
  intervalSubscribe: any;
  playbackRate: number = 1;
  minutesAudio: number;
  currentMinutesAudio: number = 0;
  secondsAudio: number;
  currentSecondsAudio: number = 0;
    
  constructor(public global: Global) { 
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {
    this.audio.nativeElement.volume = this.volume / 100;
    
  }

  ngOnChanges(): void {
    if(this.audio !== undefined) {
      this.stopAudio();
      this.audio.nativeElement.src = this.path;
    }
  }

  getDuration(event: any): void {
    this.minutesAudio = Math.trunc(this.audio.nativeElement.duration / 60);
    this.secondsAudio = Math.trunc(this.audio.nativeElement.duration % 60);
  }

  playPauseAudio(): void {
    if(!this.audio.nativeElement.paused && !this.audio.nativeElement.ended) {
      this.audio.nativeElement.pause();
      this.play = false;
      this.intervalSubscribe.unsubscribe();
    } else {
      this.audio.nativeElement.play();
      this.play = true;
      this.intervalSubscribe = this.interval.subscribe(x => {
        this.update();
      })
    }
  }

  stopAudio(): void {
    this.audio.nativeElement.pause();
    this.audio.nativeElement.currentTime = 0;
    this.playbackRate = 1;
    this.audio.nativeElement.playbackRate = 1;
    this.play = false;
    this.currentMinutesAudio = 0;
    this.currentSecondsAudio = 0;
  }

  update(): any {
    if(!this.audio.nativeElement.ended) {
      let value = this.audio.nativeElement.currentTime * this.maxValue / this.audio.nativeElement.duration;
      this.valueAudio = value;
      this.currentMinutesAudio = Math.trunc(this.audio.nativeElement.currentTime / 60);
      this.currentSecondsAudio = Math.trunc(this.audio.nativeElement.currentTime % 60);
    } else {
      this.stopAudio();
    }
  }

  changeTime(event: any): void {
    let value = event.value;
    let time = value * this.audio.nativeElement.duration / this.maxValue;
    this.audio.nativeElement.currentTime = time;
    this.valueAudio = value;
  }

  fastForwardAudio(): void {
    this.playbackRate++;
    this.audio.nativeElement.playbackRate = this.playbackRate;
    if(this.audio.nativeElement.paused || this.audio.nativeElement.ended) {
      this.audio.nativeElement.play();
      this.play = true;
      this.intervalSubscribe = this.interval.subscribe(x => {
        this.update();
      });
    }
  }

  fastRewindAudio(): void {
    if(this.playbackRate > 1) {
      this.playbackRate--;
      this.audio.nativeElement.playbackRate = this.playbackRate;
    }
  }

  changeVolume(event: any) {
    this.audio.nativeElement.volume = event.value / 100;
  }
}