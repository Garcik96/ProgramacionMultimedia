import { Component, OnInit } from '@angular/core';
import { Global } from '../app.component';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public global: Global) { 

  }

  ngOnInit(): void {
  }

  onChangeMode(value: any) {
    if(value.checked === true) {
      this.global.darkMode = true;
    } else {
      this.global.darkMode = false;
    }
  }

  getIconMode(): any {
    if(this.global.darkMode) {
      return faMoon;
    } else {
      return faSun;
    }
  }

}
