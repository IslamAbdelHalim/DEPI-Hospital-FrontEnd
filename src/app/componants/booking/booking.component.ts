import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Clinic} from "../../models/clinic";
import { Doctor } from '../../models/doctor';
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {ClinicsService} from "../../services/clinics.service";
import { DoctorsService} from "../../services/doctors.service";
import {BookingService} from "../../services/booking.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
  id: string | undefined;
  clinics: Clinic[] = [];
  doctors: Doctor[] = [];

  clinic: string = '';
  days: string[] = [];

  bookingData = {
    fullName: '',
    phoneNumber: '',
    bookingType: '',
    email: '',
    clinic: '',
    doctor: '',
    time: '',
    notes: ''
  };

  constructor(private auth: AuthService,
              private router: Router,
              private userService: UserService,
              private clinicService: ClinicsService,
              private bookingService: BookingService,
              private doctorService: DoctorsService) {}

  ngOnInit(){
    this.id = this.auth.getId()
    this.userService.getUser(this.id).subscribe((res) => {
      this.bookingData.email = res.data.user.email;
      console.log(this.bookingData.email)
    })

    this.clinicService.getClinics().subscribe((res) => {
      this.clinics = res.clinics;
      console.log(this.clinics);
    })

    this.doctorService.getDoctors().subscribe((res) => {
      this.doctors = res.doctors;
      console.log(this.doctors);
    })

    this.bookingData.doctor = this.bookingService.doctor;
    this.bookingData.clinic = this.bookingService.clinic;
    this.bookingData.time = this.bookingService.day;
    console.log(this.bookingData);
  }

  onClinicChange(event: any) {
    const value = event.target.value;
    console.log(value);
    this.doctors = this.doctors.filter((doctor: Doctor) => doctor.clinic == value);
    console.log(this.doctors)
  }

  onDoctorChange(event: any) {
    const value = event.target.value;
    const doctor = this.doctors.filter((doctor: Doctor) => doctor.name == value)[0];
    this.days = doctor.availability.days;
  }

  // عند تقديم النموذج
  onSubmit() {

    alert('تم تأكيد الحجز بنجاح');
    console.log(this.bookingData);
  }

  // إعادة ضبط النموذج
  resetForm() {
    this.bookingData = {
      fullName: '',
      phoneNumber: '',
      bookingType: '',
      email: '',
      clinic: '',
      doctor: '',
      time: '',
      notes: ''
    };
  }

}


