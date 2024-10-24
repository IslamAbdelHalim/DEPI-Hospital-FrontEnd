import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faBars = faBars;
  dialog: boolean = false;

  constructor(private router: Router, private authService: AuthService) {};

  book() {
    if (this.authService.getToken()) {
      console.log(this.authService.getToken(), this.authService.loggedIn$)
      console.log('user is loggin');
      this.router.navigate(['/booking']);
    } else {
      this.dialog = true;
    }
  }

  dialogClick() {
    this.dialog = false;
    this.router.navigate(['/auth/login'])
  }

}
