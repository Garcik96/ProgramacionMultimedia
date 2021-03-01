import { Component, HostListener, OnInit } from '@angular/core';
import { Global } from '../app.component';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  innerWidth: any;

  public radarChartOptionsLight: RadialChartOptions = {
    responsive: true,
    scale: {
      gridLines: {
        color: 'black'
      },
      angleLines: {
        color: 'black'
      },
      pointLabels: {
        fontColor: 'black',
        fontSize: 14
      },
    },
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 20
      }
    }
  };

  public radarChartOptionsDark: RadialChartOptions = {
    responsive: true,
    scale: {
      gridLines: {
        color: 'white'
      },
      angleLines: {
        color: 'white'
      },
      pointLabels: {
        fontColor: 'white',
        fontSize: 14
      },
    },
    legend: {
      labels: {
        fontColor: 'white',
        fontSize: 20
      }
    }
  };

  public radarChartLabels: Label[] = ['Javascript', 'Typescript', 'Java', 'SCSS', 'ORACLE', 'HTML', 'GIT'];

  public radarChartData: ChartDataSets[] = [
    { data: [75, 90, 90, 80, 39, 90, 70], label: 'Iván' },
    { data: [90, 70, 70, 80, 95, 75, 75], label: 'Carlos' }
  ];

  public radarChartType: ChartType = 'radar';

  constructor(public global: Global) { 

  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
