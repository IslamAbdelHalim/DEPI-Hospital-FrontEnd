import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicsService} from "../../services/clinics.service";
import { Clinic} from "../../models/clinic";
import { Doctor} from "../../models/doctor";
import {BookingService} from "../../services/booking.service";

@Component({
  selector: 'app-each-clinic',
  templateUrl: './each-clinic.component.html',
  styleUrl: './each-clinic.component.css'
})
export class EachClinicComponent implements OnInit{
  clinic : Clinic | undefined;
  doctors : Doctor[] = [];
  services: string[] = [];
  time: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clinicsService: ClinicsService,
    private bookingService: BookingService,) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.getClinic(id);
    })
  }

  getClinic(id: string): any{
    this.clinicsService.getClinic(id).subscribe((response: any) => {
      this.clinic = response.clinic[0];
      this.doctors = this.clinic!.doctors;
    });
  }

  clickDoctor(event: any) {
    console.log(event)
  }

  booking(name: string, day: string, clinic: string, time: string) {
    this.bookingService.moveInfo(name, clinic, day, time);
    this.router.navigate(['booking']);
  }
}
