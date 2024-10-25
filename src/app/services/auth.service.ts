import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.checkLogin();
  }

  private checkLogin(): void {
    const token = this.getToken();
    if (token) {
      console.log('User is logged in');
      this.loggedIn.next(true);
    } else {
      console.log('User is not logged in');
      this.loggedIn.next(false);
    }
  }

  // @ts-ignore
  getId(): string | undefined {
    if (isPlatformBrowser(this.platformId)) {
      console.log(localStorage.getItem('id'));
      return localStorage.getItem('id') || undefined;
    }
  }

  getToken(): any {
    if (isPlatformBrowser(this.platformId)) {
      const token =  localStorage.getItem('token')
      console.log(`this is the token ${token}`)
      return token;
    }
  }

  login(): void {
    if (this.getToken()) {
      this.loggedIn.next(true);
    }
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.loggedIn.next(false);
  }
}