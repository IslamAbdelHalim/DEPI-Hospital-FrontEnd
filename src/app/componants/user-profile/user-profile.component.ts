import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userdata: any[]= [];
  appointments: any[]= [];

  constructor(
    private ud: UserdataService,
  ) {}

  ngOnInit(): void {
    this.getUserData();
    this.getAppointments();
  }

  getUserData(){
    this.userdata = this.ud.getUserData();
  }

  getAppointments(){
    this.appointments = this.ud.getAppointments();
  }

}
