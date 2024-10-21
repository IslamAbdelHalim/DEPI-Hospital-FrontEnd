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
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean | undefined;
  isLoading: boolean = true;

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
    this.auth.loggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      this.isLoading = false;
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
