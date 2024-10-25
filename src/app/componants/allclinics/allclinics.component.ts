import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { ClinicsService } from '../../services/clinics.service';
import { Clinic } from '../../models/clinic';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-allclinics',
  templateUrl: './allclinics.component.html',
  styleUrl: './allclinics.component.css'
})
export class AllclinicsComponent implements OnInit{
  clinics: Clinic[] = [];
  allClinics: Clinic[] = [];
  p: number = 1;
  itemsPerPage: number = 6;
  totalItems: number = 18;
  name: string = '';

  constructor(private clinicService: ClinicsService, private router: Router, private breakpointsObservable: BreakpointObserver) {}

  ngOnInit(): void {
    this.getClinics();
    this.setupResponsive();
  }

  getClinics(): void {
    this.clinicService.getClinics().subscribe((res) => {
      this.clinics = res.clinics;
      this.allClinics = res.clinics;
    })
  }

  search() {
    if (this.name === '') {
      this.clinics = [...this.clinics];
    } else {
      this.clinics = this.allClinics.filter((clinic) => clinic.name.includes(this.name));
    }
  }

  setupResponsive() {
    this.breakpointsObservable.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).subscribe((result) => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.itemsPerPage = 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.itemsPerPage = 2;
      } else if (result .breakpoints[Breakpoints.Medium]) {
        this.itemsPerPage = 3
      } else {
        this.itemsPerPage = 6;
      }

      this.p = 1;
    })
  }
}