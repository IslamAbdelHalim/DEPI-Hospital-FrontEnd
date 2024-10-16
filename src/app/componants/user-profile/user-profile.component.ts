import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit{
  userData: any = {};
  bookings: any = {};

  constructor(private userServices: UserService, private router: Router) {};

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    console.log(this.router.url);
  }
}
