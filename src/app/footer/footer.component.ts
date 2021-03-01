import { Component, OnInit } from '@angular/core';
import { Global } from '../app.component';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

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

  linkedinRedirect(): void {
    window.location.href = 'https://www.linkedin.com/feed/';
  }

  twitterIcon(): any {
    return faTwitter;
  }

  twitterRedirect(): void {
    window.location.href = 'https://twitter.com/home';
  }

  instagramIcon(): any {
    return faInstagram;
  }

  instagramRedirect(): void {
    window.location.href = 'https://www.instagram.com/';
  }

  githubIcon(): any {
    return faGithub;
  }

  githubRedirect(): void {
    window.location.href = 'https://github.com/Garcik96/ProgramacionMultimedia';
  }
}
