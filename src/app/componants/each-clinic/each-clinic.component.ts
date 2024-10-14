import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicsService} from "../../services/clinics.service";
import { Clinic} from "../../models/clinic";
import { Doctor} from "../../models/doctor";

@Component({
  selector: 'app-each-clinic',
  templateUrl: './each-clinic.component.html',
  styleUrl: './each-clinic.component.css'
})
export class EachClinicComponent implements OnInit{
  clinic : Clinic | null = null;
  doctors : Doctor[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clinicsService: ClinicsService,) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.getClinic(id);
    })
  }

  getClinic(id: string): any{
    this.clinicsService.getClinic(id).subscribe(response => {
      this.clinic = response.clinic[0];
      this.doctors = this.clinic!.doctors;
      console.log(this.clinic)
    })
  }
}
