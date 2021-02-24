import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../app.component.scss','./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  darkMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getIconMode(): any {
    if(this.darkMode) {
      return faMoon;
    } else {
      return faSun;
    }
  }

}
