import { Component, OnInit } from '@angular/core';
import { ClinicsService} from "../../services/clinics.service";
import {Clinic} from "../../models/clinic";

@Component({
  selector: 'app-clinics-pagination',
  templateUrl: './clinics-pagination.component.html',
  styleUrl: './clinics-pagination.component.css'
})
export class ClinicsPaginationComponent implements OnInit {
  clinics: Clinic[] = [];
  p: number = 1;
  limit: number = 16;
  totalItems: number = 16;

  constructor(private clinicsService: ClinicsService) { }

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
