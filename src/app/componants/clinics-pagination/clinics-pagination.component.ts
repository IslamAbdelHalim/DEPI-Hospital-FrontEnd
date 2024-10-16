import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { ClinicsService} from "../../services/clinics.service";
import {Clinic} from "../../models/clinic";
import { error } from 'console';

@Component({
  selector: 'app-clinics-pagination',
  templateUrl: './clinics-pagination.component.html',
  styleUrl: './clinics-pagination.component.css'
})
export class ClinicsPaginationComponent implements OnInit {

  @Output() dataLoaded: EventEmitter<boolean> = new EventEmitter<boolean>();

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
      this.dataLoaded.emit(true);
    }, (error) => {
      console.log(error);
      this.dataLoaded.emit(false);
    })
  }

  onPageChange(event: number) {
    this.p = event;
    this.getClinics()
  }
}
