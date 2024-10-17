import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  doctors: Doctor[] = [];
  itemsPerPage: number = 3;
  page: number = 1;
  totalItems: number = 0;

  constructor(private doctorService: DoctorsService) {};

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((docs) => {
      this.doctors = docs.doctors
      this.totalItems = this.doctors.length;
      console.log(this.doctors)
      console.log(this.doctors[0].availability.days[1])
    }
    , (err) => console.log(err));
  }

  onChange(page: any): void {
    this.page = page;
  }
}
