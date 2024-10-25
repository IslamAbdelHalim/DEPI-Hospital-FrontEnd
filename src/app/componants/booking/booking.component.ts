import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Clinic} from "../../models/clinic";
import { Doctor } from '../../models/doctor';
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {ClinicsService} from "../../services/clinics.service";
import { DoctorsService} from "../../services/doctors.service";
import {BookingService} from "../../services/booking.service";
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
  faCircleCheck = faCircleCheck;
  confirm: boolean = false;

  id: string | undefined;
  clinics: Clinic[] = [];
  doctors: Doctor[] = [];
  allDoctors: Doctor[]= [];

  clinic: string = '';
  days: string[] = [];
  time: string = '';

  bookingData = {
    fullName: '',
    phoneNumber: '',
    bookingType: '',
    email: '',
    clinic: '',
    doctor: '',
    day: '',
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
    })

    this.clinicService.getClinics().subscribe((res) => {
      this.clinics = res.clinics;
    })

    this.doctorService.getDoctors().subscribe((res) => {
      this.doctors = res.doctors;
      this.allDoctors = res.doctors;
    })

    this.bookingData.doctor = this.bookingService.doctor;
    this.bookingData.clinic = this.bookingService.clinic;
    this.bookingData.day = this.bookingService.day;
    this.bookingData.time = this.bookingService.time;
  }

  onClinicChange(event: any) {
    const value = event.target.value;
    this.bookingData.doctor = '';
    this.doctors = this.allDoctors.filter((doctor: Doctor) => doctor.clinic == value);
  }

  onDoctorChange(event: any) {
    const value = event.target.value;
    const doctor = this.doctors.filter((doctor: Doctor) => doctor.name == value)[0];
    this.days = doctor.availability.days;
    this.bookingData.time = doctor.availability.time;
  }

  // عند تقديم النموذج
  onSubmit() {
    this.confirm = true;
    this.bookingService.book(this.bookingData).subscribe((res) => {
      console.log(res);
      this.resetForm();
      this.router.navigate([`user/${this.id}`]);
    }, (err) => {
      console.log(err);
    })
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
      day: '',
      time: '',
      notes: ''
    };
  }

}


