import { Component, OnInit } from '@angular/core';
import { Global } from '../app.component';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  today: Date = new Date();

  constructor(public global: Global) { 

  }

  ngOnInit(): void {

  }

  linkedinIcon(): any {
    return faLinkedin;
  }

  twitterIcon(): any {
    return faTwitter;
  }

  instagramIcon(): any {
    return faInstagram;
  }
}
