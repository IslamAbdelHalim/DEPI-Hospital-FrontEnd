import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faUser } from'@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean | undefined;


  open: boolean = false;
  id: string | undefined;

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faEnvelope1 = faEnvelope;
  faPhone = faPhone;
  faUser = faUser;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.id = localStorage.getItem('id') || undefined;
    console.log(this.id)
    this.auth.loggedIn$.subscribe((login) => {
      this.isLoggedIn = login;
    })
  }

  logout():void {
    this.auth.logout();
    this.router.navigate(['/auth/login'])
  }

  toggle(): void {
    this.open = !this.open;
  }
  
}
