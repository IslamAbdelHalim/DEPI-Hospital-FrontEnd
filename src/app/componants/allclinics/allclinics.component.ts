import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClinicsService } from '../../services/clinics.service';
import { Clinic } from '../../models/clinic';

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

  constructor(private clinicService: ClinicsService) {}

  ngOnInit(): void {
    this.getClinics();
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
    this.name = '';
  }
}
