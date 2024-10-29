import { Component, OnInit } from '@angular/core';
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit{
  userData: any = {};
  bookings: any = {};
  edit = faPenToSquare;

  constructor(private userServices: UserService, private router: Router, private spinner: NgxSpinnerService) {};

  ngOnInit(): void {
    this.spinner.show();
    this.getUser();
  }

  getUser() {
    const id = this.router.url.split('/')[2];
    this.userServices.getUser(id).subscribe((res) => {
      this.userData = res.data.user;
      this.bookings = res.data.user.bookings;
      this.spinner.hide();
    }, (err) => {
      console.log(err);
      this.spinner.hide();
    })
  }
}
