import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from'@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faEnvelope1 = faEnvelope;
  faPhone = faPhone;

  constructor(private router: Router) { }
}
