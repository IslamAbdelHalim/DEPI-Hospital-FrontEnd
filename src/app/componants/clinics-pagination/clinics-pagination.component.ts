import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ClinicsService} from "../../services/clinics.service";
import {Clinic} from "../../models/clinic";

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

  constructor(private clinicsService: ClinicsService, private cdr: ChangeDetectorRef, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.getClinics();
    this.setupResponsive();
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

  setupResponsive() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        console.log("XSmall screen detected, setting itemsPerPage to 1");
        this.itemsPerPage = 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        console.log("Small screen detected, setting itemsPerPage to 2");
        this.itemsPerPage = 2;
      } else {
        this.itemsPerPage = 3;
      }
      this.p = 1;
    });
  }
}
