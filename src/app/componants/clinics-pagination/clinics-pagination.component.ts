import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  itemsPerPage: number = 3
  totalItems: number = 18;

  constructor(private clinicsService: ClinicsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getClinics();
  }

  getClinics() {
    this.clinicsService.getClinics().subscribe((res) => {
      this.clinics = res.clinics;
      this.cdr.detectChanges();
    })
  }

  onPageChange(event: number) {
    this.p = event;
    this.getClinics()
  }
}
