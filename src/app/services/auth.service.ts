import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (token) {
        this.loggedIn.next(true);
      }
    }
  }

  login(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
      this.loggedIn.next(true);
    }
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      this.loggedIn.next(false);
    }
  }
}
