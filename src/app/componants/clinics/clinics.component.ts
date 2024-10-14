import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Clinic} from "../../models/clinic";
import {ClinicsService} from "../../services/clinics.service";

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrl: './clinics.component.css'
})
export class ClinicsComponent implements OnInit{
  clinics: Clinic[] = [];
  p: number = 1;
  limit: number = 18;
  totalItems: number = 18;

  constructor(private clinicsService: ClinicsService, private router: Router) { }

  ngOnInit() {
    this.getClinics(this.p, this.limit);
  }

  getClinics(page: number, limit: number) {
    this.clinicsService.getClinics(page, limit).subscribe(response => {
      this.clinics = response.clinics;
      this.totalItems = this.clinics.length;
    });
  }

  onPageChange(page: number) {
    this.p = page;
    this.getClinics(this.p, this.limit);
    console.log(this.p);
  }

}
